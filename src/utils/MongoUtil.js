/* eslint-disable no-console */
const { MongoClient } = require('mongodb');

const dbUri = `mongodb+srv://Smera:smera@cluster0.rynfj.mongodb.net?retryWrites=true&w=majority`;

class MongoUtil {
    constructor() {
        this.client = new MongoClient(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async connect() {
        await this.client.connect();
        console.log('Connected to MongoDB cluster');
    }
}

module.exports = new MongoUtil();
