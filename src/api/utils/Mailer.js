/* eslint-disable no-console */
const nodemailer = require('nodemailer');
require('dotenv').config(); // load env configurations

const getEmailHTMLContent = (user, message) => {
    return `<p>
    <b>Hello</b> ${user.firstName} ${user.lastName}!</p>
    <p style="font-size: 20px; font-color: gray; border: 1px solid lightgreen; paddng: 5px">${message}</p>
    <footer>Proudly built @ <a href='https://smera.io'>smera.io</href></footer>`;
};

async function sendMail(user, operation) {
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

    let title = '';
    switch (operation) {
        case 'PROFILE_UPDATE': {
            title = 'Profile updated!';
            break;
        }
        default: {
            title = 'Hello there!';
        }
    }

    // Message object
    const message = {
        // from: 'tukuna.patro@smera.io',
        // Comma separated list of recipients
        to: user.email,
        bcc: '',

        // Subject of the message
        subject: title,

        // plaintext body
        text: 'Test mail !',

        // HTML body
        html: getEmailHTMLContent(user, 'Your profile is updated successfully!'),

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
    console.log('Message sent successfully to,', user.email);
}

module.exports = sendMail;

// main().catch((err) => {
//     console.error(err.message);
//     process.exit(1);
// });
