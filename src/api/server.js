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
const quizUtil = require('./utils/QuizUtil');
const { sendMail } = require('./utils/Mailer');

const Pusher = require('pusher');

const pusher = new Pusher({
    appId: '1282488',
    key: 'de5c865494456c71a085',
    secret: '1ef4aec80ed6d7c98ee7',
    cluster: 'ap2',
    useTLS: true
});

pusher.trigger('my-channel', 'my-event', {
    message: 'hello world12 sfesf sfesf'
});

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

const VmIp = '13.232.160.22';

const whitelist = [
    'http://localhost:3001',
    'http://localhost:3000',
    `https://${VmIp}`,
    'http://learn.smera.io',
    'https://learn.smera.io',
    'http://smera.io',
    'https://smera.io',
    `http://${VmIp}`
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));

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

app.post('/login', async (req, res) => {
    console.log(req.body);
    try {
        await mongoUtil.connect();

        const userCollection = mongoUtil.client.db('users').collection('user');
        const result = await userCollection.findOneAndUpdate(
            { email: req.body.email },
            { $set: { ...req.body } },
            { upsert: true, returnNewDocument: true }
        );

        console.log('user in db', result.value);
        req.session.user = result.value;
        return res.json({ loginStatus: 'success', user: result.value });
    } catch (error) {
        return res.json({ loginStatus: 'Failed, because of DB connection error!' });
    }
});

app.post('/logout', async (req, res) => {
    await req.session.destroy();
    console.log('user session destroyed!');
    return res.json({ logoutStatus: 'success' });
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

app.get('/guest_courses', async (req, res) => {
    const coursesCursor = mongoUtil.client
        .db('courses')
        .collection('courses')
        .find({ guest: true });
    const courses = [];
    while (await coursesCursor.hasNext()) {
        const doc = await coursesCursor.next();
        courses.push(doc);
        console.log(JSON.stringify(doc, null, 4));
    }

    res.json({ status: 'success', courses });
});

app.get('/guest_courses/:id', async (req, res) => {
    const {
        params: { id }
    } = req;
    const query = { _id: new ObjectId(id), guest: true };

    const course = await mongoUtil.client.db('courses').collection('courses').findOne(query);
    console.log('course', course);
    const { _id, ...courseWithout_Id } = course;

    return res.json({ course: courseWithout_Id });
});

app.get('/courses/:id', processUserLogin, async (req, res) => {
    const {
        params: { id }
    } = req;
    const query = { _id: new ObjectId(id) };

    const course = await mongoUtil.client.db('courses').collection('courses').findOne(query);
    console.log('course', course);
    const { _id, ...courseWithout_Id } = course;

    return res.json({ course: courseWithout_Id });
});

app.post('/deleteCourse', processUserLogin, async (req, res) => {
    console.log(req.query.id, 'deleting a course with id');
    if (!req.session.user.isAdmin) {
        return res.sendStatus(403);
    }

    const courseCollection = mongoUtil.client.db('courses').collection('courses');
    const query = { _id: new ObjectId(req.query.id) };
    const result = await courseCollection.deleteOne(query);
    res.json({ status: 'success', result });
});

app.put('/updateCourse', processUserLogin, async (req, res) => {
    console.log('updating course with data', req.body, 'courseid', req.query.id);

    console.log('current user', req.session.user);
    if (!req.session.user.isAdmin) {
        return res.sendStatus(403);
    }

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

app.post('/addCourse', processUserLogin, async (req, res) => {
    console.log(req.body, 'create course data');

    const coursesCollection = mongoUtil.client.db('courses').collection('courses');
    const result = await coursesCollection.insertOne(req.body);
    res.json({ status: 'success', result });
});

app.post('/addQuiz', processUserLogin, async (req, res) => {
    console.log('adding a quiz with data', req.body);

    const quizCollection = mongoUtil.client.db('quizes').collection('quizes');
    const result = await quizCollection.insertOne({
        ...req.body,
        createdBy: req.session.user,
        organisation: 'smera'
    });
    res.json({ status: 'success', result });
});

app.post('/deleteQuiz', processUserLogin, async (req, res) => {
    console.log(req.query.id, 'deleting a quiz with id');

    const quizCollection = mongoUtil.client.db('quizes').collection('quizes');
    const query = { _id: new ObjectId(req.query.id) };
    const result = await quizCollection.deleteOne(query);
    res.json({ status: 'success', result });
});

app.post('/publishQuiz', processUserLogin, async (req, res) => {
    console.log(req.body, 'publishing quiz', 'quizId', req.query.id);

    const quizCollection = mongoUtil.client.db('quizes').collection('quizes');
    const result = await quizCollection.updateOne(
        { _id: new ObjectId(req.query.id) },
        { $push: { status: 'published', reviewedBy: req.body.user } }
    );
    res.json({ status: 'success', result });
});

app.post('/updateQuiz', processUserLogin, async (req, res) => {
    console.log('updating quiz with data', req.body, 'quizId', req.query.id);

    const quizCollection = mongoUtil.client.db('quizes').collection('quizes');
    const result = await quizCollection.updateOne(
        { _id: new ObjectId(req.query.id) },
        { $set: { ...req.body, updatedBy: req.body.user } }
    );
    res.json({ status: 'success', result });
});

app.post('/submitQuiz', processUserLogin, async (req, res) => {
    const id = req.body.id;
    console.log(req.body, 'submitting quiz ', id);

    const quizCollection = mongoUtil.client.db('quizes').collection('submissions');
    await quizCollection.insertOne({
        ...req.body,
        submittedBy: req.session.user
    });
    const query = { _id: new ObjectId(id) };
    const quiz = await mongoUtil.client.db('quizes').collection('quizes').findOne(query);

    const quizAnswerObj = quiz.questions.reduce((acc, question) => {
        const { answer, ...allButAnswers } = question;
        acc[question.id] = answer;
        return acc;
    }, {});
    console.log(quizAnswerObj);
    res.json({ status: 'success', result: quizAnswerObj });
});

app.post('/submitGuestQuiz', async (req, res) => {
    const id = req.body.id;
    console.log(req.body, 'submitting quiz ', id);

    const query = { _id: new ObjectId(id), guest: true };
    let quizAnswerObj = {};
    try {
        const quiz = await mongoUtil.client.db('quizes').collection('quizes').findOne(query);

        quizAnswerObj = quiz.questions.reduce((acc, question) => {
            const { answer, ...allButAnswers } = question;
            acc[question.id] = answer;
            return acc;
        }, {});
    } catch (error) {
        console.log('post guest quiz error', error);
    }

    console.log(quizAnswerObj);
    res.json({ status: 'success', result: quizAnswerObj });
});

app.get('/getAllQuizes', processUserLogin, async (req, res) => {
    const quizCursor = mongoUtil.client.db('quizes').collection('quizes').find({});
    const quizes = [];
    while (await quizCursor.hasNext()) {
        const doc = await questionsCursor.next();
        quizes.push(doc);
        console.log(JSON.stringify(doc, null, 4));
        // process doc here
    }

    res.json({ status: 'success', quizes });
});

app.get('/getPublishedQuizes', processUserLogin, async (req, res) => {
    const quizCursor = mongoUtil.client.db('quizes').collection('quizes').find({}); //status: 'published'
    const quizes = [];
    while (await quizCursor.hasNext()) {
        const doc = await quizCursor.next();
        const quizQuestionsWithoutAnswers = doc.questions.map((q) => {
            return { options: q.options, title: q.title };
        });
        quizes.push({ ...doc, questions: quizQuestionsWithoutAnswers });
    }

    res.json({ status: 'success', quizes });
});

app.get('/guest_quizes/:id', async (req, res) => {
    const {
        params: { id }
    } = req;
    const isEditMode = req.query.edit;
    console.log('is edit mode', isEditMode);
    const query = { _id: new ObjectId(id), guest: true };

    const quiz = await mongoUtil.client.db('quizes').collection('quizes').findOne(query);
    console.log('quiz', quiz);

    const { _id, ...quizWithout_Id } = quiz;

    const quizQuestionsWithoutAnswers = quiz.questions.map((question) => {
        const { answer, ...allButAnswers } = question;
        return allButAnswers;
    });

    res.json({ status: 'success', quiz: { ...quiz, questions: quizQuestionsWithoutAnswers } });
});

app.get('/quiz/:id', processUserLogin, async (req, res) => {
    const {
        params: { id }
    } = req;
    const isEditMode = req.query.edit;
    console.log('is edit mode', isEditMode);
    const query = { _id: new ObjectId(id) };

    const quiz = await mongoUtil.client.db('quizes').collection('quizes').findOne(query);
    console.log('quiz', quiz);

    const { _id, ...quizWithout_Id } = quiz;

    if (isEditMode) {
        res.json({ status: 'success', quiz: quizWithout_Id });
        return true;
    }

    const quizQuestionsWithoutAnswers = quiz.questions.map((question) => {
        const { answer, ...allButAnswers } = question;
        return allButAnswers;
    });

    res.json({ status: 'success', quiz: { ...quiz, questions: quizQuestionsWithoutAnswers } });
});

app.post('/addCourse', async (req, res) => {
    console.log(req.body, 'create course data');

    const coursesCollection = mongoUtil.client.db('courses').collection('courses');
    const result = await coursesCollection.insertOne(req.body);
    res.json({ status: 'success', result });
});

// const PORT = 5001;
// app.listen(PORT, () => {
//     console.log(`Node server is running on port: ${PORT}`);
//     console.log('Press Ctrl+C to stop server');
// });

const PORT = 5001;

const allPort = '0.0.0.0';
app.listen(PORT, allPort);
console.log(`Node server is running on port: ${PORT}`);
console.log('Press Ctrl+C to stop server');
