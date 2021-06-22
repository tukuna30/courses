/* eslint-disable class-methods-use-this */
const quizes = [
    {
        id: 1,
        /*firstName: 'Subhasmita',
        lastName: 'Khamari',*/
        name: 'HTML',
        questions: [
            {
                title: 'What does HTML stands for?',
                options: [
                    'Hypertext Machine language',
                    'Hypertext Markup Language.',
                    'Hightext machine language.',
                    'Hypertext Markup Language'
                ]
            },
            {
                title: 'What does CSS stands for?',
                options: [
                    'Hypertext Machine language',
                    'Hypertext Markup Language.',
                    'Hightext machine language.',
                    'Classic style script'
                ]
            },
            {
                title: 'What does CSS stands for?',
                options: [
                    'Hypertext Machine language',
                    'Hypertext Markup Language.',
                    'Hightext machine language.',
                    'Classic style script'
                ]
            }
        ],
        active: true,
        description: 'A quiz about HTML'
    },
    {
        id: 2,
        /*firstName: 'Akankshya',
        lastName: 'Behera',*/
        name: 'CSS',
        questions: [],
        active: true,
        description: 'akankshya.b0009@gmail.com'
    },
    {
        id: 3,
        /*firstName: 'Suman',
        lastName: 'Patra',*/
        name: 'JAVASCRIPT',
        questions: [],
        active: true,
        description: 'sumanpatra688@gmail.com'
    },
    {
        id: 4,
        /*firstName: 'Deepak',
        lastName: 'Naik',*/
        name: 'REACTJS',
        questions: [],
        active: true,
        description: '0001d1001d1001d1000@gmail.com'
    },
    {
        id: 5,
        /* firstName: 'Tukuna',
        lastName: 'Patro',*/
        name: 'NODEJS',
        questions: [],
        active: true,
        description: 'tukuna.patro@gmail.com'
    },
    {
        id: 6,
        /*firstName: 'Swati',
        lastName: 'Sucharita',*/
        name: 'MONGODB',
        questions: [],
        active: false,
        description: 'swatisucharita94@gmail.com'
    }
];

// CRUD
// View : GET /users
// view one user : GET /user/:id
// Add : POST /user
// Delete : DELETE /user/:id
// Update : PUT/PATCH /user/:id

class QuizUtil {
    getQuizes() {
        return quizes;
    }

    getQuiz(id) {
        const quiz = quizes.find((u) => {
            return u.id === parseInt(id, 10);
        });

        return quiz || {};
    }
}

module.exports = new QuizUtil();
