/* eslint-disable class-methods-use-this */
const quizes = [
    {
        id: 1,
        /*firstName: 'Subhasmita',
        lastName: 'Khamari',*/
        name: 'HTML',
        courses: [
            {
                title: 'React JS',
                description: 'Learn how to use React in modern web apps',
                topics: [
                    {
                        title: 'Why React is popular?',
                        sections: [
                            {
                                sectionTitle: 'Easy to learn',
                                sectionDescription:
                                    ' React uses html, css and js in one component js file, so if you know JavaScript and html and CSS, you can start a web app quickly.'
                            },
                            {
                                sectionTitle: 'Blazing Fast',
                                sectionDescription:
                                    'React uses dom difference algorithm, which makes only render the changes in a component. '
                            }
                        ]
                    },
                    {
                        title: 'React component LifeCycle methods',
                        title: 'LifeCycle methods in class based components',
                        sections: [
                            {
                                sectionTitle: 'Creation',
                                sectionDescription: 'It has constructor, render, componentDidMount'
                            },
                            {
                                sectionTitle: 'Updatation',
                                sectionDescription: 'shouldComponent update'
                            },
                            {
                                sectionTitle: 'Destroy',
                                sectionDescription: 'componentWillUnmount'
                            }
                        ]
                    },
                    ,
                    {}
                ]
            }
        ],
        questions: [
            {
                title: 'What does HTML stands for?',
                id: 'html1',
                options: [
                    'Hyper Text Machine language',
                    'Hyper Text Manmade Language',
                    'High Text machine language',
                    'Hyper Text Markup Language'
                ]
            },
            {
                title: 'Which one of the following is a block element',
                id: 'html2',
                options: ['p', 'span', 'img', 'a']
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
