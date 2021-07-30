/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
const cors = require('cors');
const express = require('express');
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const redisClient = redis.createClient();

const { ObjectId } = require('mongodb');
const mongoUtil = require('./utils/MongoUtil');
const userUtil = require('./utils/UserUtil');
const courseUtil = require('./utils/CourseUtil');
const sendMail = require('./utils/Mailer');

const app = express();

redisClient.on('error', (err) => {
    console.log('Could not establish a connection with redis. ');
});

redisClient.on('connect', (err) => {
    console.log('Connected to redis successfully');
});

app.use(
    session({
        secret: ['secretpasswordforsession'],
        name: 'quizzonesessionid',
        cookie: {
            httpOnly: true,
            secure: false,
            sameSite: false,
            maxAge: 60 * 1000 * 60 * 24 // Time is in miliseconds
        },
        store: new RedisStore({ client: redisClient, host: 'localhost', port: 6379 }),
        resave: false
    })
);

app.use(
    cors({
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200,
        credentials: true
    })
);

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

// connect to mongodb on server start
(async function connectToDB() {
    await mongoUtil.connect();
})();

const processUserLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.sendStatus(401);
    } else {
        next();
    }
};

app.get('/', (req, res) => {
    // console.log('build react frontend code and use index.html from build folder');
    return res.json({
        message: 'build react frontend code and use index.html from build folder'
    });
});

app.get('/user/:id', (req, res) => {
    const {
        params: { id }
    } = req;

    console.log('request session id', req.session);
    if (!req.session.user) {
        return res.sendStatus(401);
    }
    const user = userUtil.getUser(id);
    return res.json({ user });
});

app.post('/user', (req, res) => {
    const data = req.body;
    const user = userUtil.addUser(data);
    return res.json({ user });
});

app.post('/login', async (req, res) => {
    console.log(req.body);
    req.session.user = req.body.email;
    try {
        await mongoUtil.connect();

        const userCollection = mongoUtil.client.db('users').collection('user');
        const user = await userCollection.findOneAndUpdate(
            { email: req.body.email },
            { $set: { ...req.body } },
            { upsert: true, returnNewDocument: true }
        );

        console.log('user in db', user);
        return res.json({ loginStatus: 'success' });
    } catch (error) {
        return res.json({ loginStatus: 'Failed, because of DB connection error!' });
    }
});

app.post('/logout', async (req, res) => {
    await req.session.destroy();
    console.log('user session destroyed!');
    return res.json({ logoutStatus: 'success' });
});

app.put('/user/:id', (req, res) => {
    const {
        params: { id }
    } = req;
    // Make a call to userUtil and update user
    console.log('req body', req.body);
    const user = userUtil.updateUser(id, req.body);
    sendMail(user, 'PROFILE_UPDATE');
    return res.json({ user });
});

app.delete('/user/:id', (req, res) => {
    const {
        params: { id }
    } = req;
    // Make a call to userUtil and delete user
    userUtil.deleteUser(id);
    return res.json({ success: true });
});

app.get('/courses', processUserLogin, async (req, res) => {
    const coursesCursor = mongoUtil.client.db('courses').collection('courses').find({});
    const courses = [];
    while (await coursesCursor.hasNext()) {
        const doc = await coursesCursor.next();
        courses.push(doc);
        console.log(JSON.stringify(doc, null, 4));
    }

    res.json({ status: 'success', courses });
});

app.get('/course/:id', processUserLogin, async (req, res) => {
    const {
        params: { id }
    } = req;
    const query = { _id: new ObjectId(id) };

    const course = await mongoUtil.client.db('courses').collection('courses').findOne(query);
    console.log('course', course);
    return res.json({ course });
});

app.post('/deleteCourse', processUserLogin, async (req, res) => {
    console.log(req.query.id, 'deleting a course with id');

    const courseCollection = mongoUtil.client.db('courses').collection('courses');
    const query = { _id: new ObjectId(req.query.id) };
    const result = await courseCollection.deleteOne(query);
    res.json({ status: 'success', result });
});

app.put('/updateCourse', processUserLogin, async (req, res) => {
    console.log('updating course with data', req.body, 'courseid', req.query.id);

    const courseCollection = mongoUtil.client.db('courses').collection('courses');
    const result = await courseCollection.updateOne(
        { _id: new ObjectId(req.query.id) },
        { $set: { ...req.body, updatedBy: req.body.user } }
    );
    res.json({ status: 'success', result });
});

app.post('/createUser', async (req, res) => {
    console.log(req.body, 'create user data');

    const userCollection = mongoUtil.client.db('users').collection('user');
    const result = await userCollection.insertOne(req.body);
    res.json({ status: 'success', result });
});

app.post('/addCourse', async (req, res) => {
    console.log(req.body, 'create course data');

    const coursesCollection = mongoUtil.client.db('courses').collection('courses');
    const result = await coursesCollection.insertOne(req.body);
    res.json({ status: 'success', result });
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Node server is running on port: ${PORT}`);
    console.log('Press Ctrl+C to stop server');
});
