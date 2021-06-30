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
            maxAge: 60 * 1000 * 30 // Time is in miliseconds
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

app.get('/', (req, res) => {
    // console.log('build react frontend code and use index.html from build folder');
    return res.json({
        message: 'build react frontend code and use index.html from build folder'
    });
});

// app.get('/courses', (req, res) => {
//     const courses = [
//         { id: 1, name: 'Javascript', description: '' },
//         { id: 2, name: 'CSS', description: '' },
//         { id: 3, name: 'HTML', description: '' }
//     ];
//     return res.json({ courses });
// });

app.get('/users', (req, res) => {
    console.log('session in users api', req.session.user);
    if (!req.session.user) {
        return res.sendStatus(401);
    }
    const users = userUtil.getUsers();
    return res.json({ users });
});

app.get('/courses', (req, res) => {
    console.log('session in users api', req.session.user);
    if (!req.session.user) {
        return res.sendStatus(401);
    }
    const courses = courseUtil.getCourses();
    return res.json({ courses });
});

app.get('/course/:id', (req, res) => {
    const {
        params: { id }
    } = req;

    console.log('request session id', req.session);
    if (!req.session.user) {
        return res.sendStatus(401);
    }
    const course = courseUtil.getCourse(id);
    console.log('course', course);
    return res.json({ course });
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

app.get('/students', async (req, res) => {
    const usersCursor = mongoUtil.client.db('users').collection('user').find();
    // function iterateFunc(doc) {
    //   users.push(doc);
    //   console.log(JSON.stringify(doc, null, 4));
    // }

    // function errorFunc(error) {
    //   console.log(error);
    // }

    // await usersCursor.forEach(iterateFunc, errorFunc);
    const users = [];
    while (await usersCursor.hasNext()) {
        const doc = await usersCursor.next();
        users.push(doc);
    }

    res.json({ users });
});

app.post('/findOrcreateUser', async (req, res) => {
    await mongoUtil.connect();

    const userCollection = mongoUtil.client.db('users').collection('user');
    const result = await userCollection.findOneAndUpdate(
        { name: 'A.B. Abracus' },
        { $set: { name: 'A.B. Abracus', email: 'ab@cus.com', thirdPartyLogin: 'Gmail' } },
        { upsert: true, returnNewDocument: true }
    );

    res.json({ status: 'success', result });
});

app.post('/createQuestion', async (req, res) => {
    console.log(req.body, 'create question');

    const userCollection = mongoUtil.client.db('questions').collection('question');
    const result = await userCollection.insertOne(req.body);
    res.json({ status: 'success', result });
});

app.post('/answerQuestion', async (req, res) => {
    console.log(req.body, 'update question answer', 'questionid', req.query.id);

    const questionCollection = mongoUtil.client.db('questions').collection('question');
    const result = await questionCollection.updateOne(
        { _id: new ObjectId(req.query.id) },
        { $push: { answers: req.body } }
    );
    res.json({ status: 'success', result });
});

app.get('/tests', async (req, res) => {
    const questionsCursor = mongoUtil.client.db('questions').collection('question').find({});
    const questions = [];
    while (await questionsCursor.hasNext()) {
        const doc = await questionsCursor.next();
        questions.push(doc);
        console.log(JSON.stringify(doc, null, 4));
        // process doc here
    }

    res.json({ status: 'success', questions });
});

app.post('/createUser', async (req, res) => {
    console.log(req.body, 'create user data');

    const userCollection = mongoUtil.client.db('users').collection('user');
    const result = await userCollection.insertOne(req.body);
    res.json({ status: 'success', result });
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Node server is running on port: ${PORT}`);
    console.log('Press Ctrl+C to stop server');
});
