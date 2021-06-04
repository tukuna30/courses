/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
const cors = require('cors');
const express = require('express');

const { ObjectId } = require('mongodb');
const mongoUtil = require('./utils/MongoUtil');
const userUtil = require('./utils/UserUtil');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3030',
        optionsSuccessStatus: 200
    })
);

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

(async function connectToDB() {
    await mongoUtil.connect();
})();

app.get('/', (req, res) => {
    // console.log('build react frontend code and use index.html from build folder');
    return res.json({
        message: 'build react frontend code and use index.html from build folder'
    });
});

app.get('/users', (req, res) => {
    const users = userUtil.getUsers();
    return res.json({ users });
});

app.get('/user/:id', (req, res) => {
    const {
        params: { id }
    } = req;
    const user = userUtil.getUser(id);
    return res.json({ user });
});

app.post('/user', (req, res) => {
    const data = req.body;
    const user = userUtil.addUser(data);
    return res.json({ user });
});

app.put('/user/:id', (req, res) => {
    const {
        params: { id }
    } = req;
    // Make a call to userUtil and update user
    const user = userUtil.updateUser(id, req.body);
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

app.post('/createUser', async (req, res) => {
    await mongoUtil.connect();

    const userCollection = mongoUtil.client.db('users').collection('user');
    const result = await userCollection.insertOne(req.body);
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

app.get('/questions', async (req, res) => {
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
    console.log(`Starting server on port: ${PORT}`);
    console.log('Press Ctrl+C to stop server');
});
