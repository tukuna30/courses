/* eslint-disable no-console */
const nodemailer = require('nodemailer');
require('dotenv').config(); // load env configurations

async function sendMail() {
    // Create a SMTP transporter object
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: Buffer.from(process.env.MAIL_PASSWORD.slice(4, -6), 'base64').toString('utf-8'),
            clientId: process.env.MAIL_OAUTH_CLIENT_ID,
            clientSecret: process.env.MAIL_OAUTH_CLIENT_SECRET,
            refreshToken: process.env.MAIL_OAUTH_REFRESH_TOKEN
        }
    });

    // Message object
    const message = {
        // from: 'tukuna.patro@smera.io',
        // Comma separated list of recipients
        to:
            'tukuna.patro@gmail.com,akankshya.b0009@gmail.com, khamarisubhasmita9@gmail.com, sumanpatra688@gmail.com, 0001d1001d1001d1000@gmail.com',
        bcc: '',

        // Subject of the message
        subject: 'Howdy?',

        // plaintext body
        text: 'Test mail !',

        // HTML body
        html: `<p><b>Hello</b> dear!</p>
        <p style="font-size: 20px; font-color: gray; border: 1px solid lightgreen; paddng: 5px">Email Code is updated. Pull the latest main branch by <b>git pull origin main </b> on <a href='https://github.com/tukuna30/quizzone'>Quizzone repo</a>
        and run <b>npm install </b> to install nodemailer library. Finally to test email start api server and visit user detail page</p>
        <footer>Proudly built @ <a href='https://smera.io'>smera.io</href></footer>`,

        // An array of attachments
        attachments: [
            // // String attachment
            // {
            //     filename: 'notes.txt',
            //     content: 'Some notes about this e-mail',
            //     contentType: 'text/plain' // optional, would be detected from the filename
            // },
            // // Binary Buffer attachment
            // {
            //     filename: 'image.png',
            //     content: Buffer.from(
            //         'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
            //             '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
            //             'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
            //         'base64'
            //     ),
            //     cid: 'note@example.com' // should be as unique as possible
            // },
            // // File Stream attachment
            // {
            //     filename: 'Quizzone logo',
            //     path: `${__dirname}/../../assets/images/quizone.png`,
            //     cid: 'logo@smera.io' // should be as unique as possible
            // }
        ]
    };

    const info = await transporter.sendMail(message);
    console.log('Message sent successfully as %s', info.messageId);
}

module.exports = sendMail;

// main().catch((err) => {
//     console.error(err.message);
//     process.exit(1);
// });
