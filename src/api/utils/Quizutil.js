/* eslint-disable class-methods-use-this */
const quizes = [
    {
        id: 1,
        /*firstName: 'Subhasmita',
        lastName: 'Khamari',*/
        name: 'HTML',
        active: true,
        description: 'khamarisubhasmita9@gmail.com'
    },
    {
        id: 2,
        /*firstName: 'Akankshya',
        lastName: 'Behera',*/
        name: 'CSS',
        active: true,
        description: 'akankshya.b0009@gmail.com'
    },
    {
        id: 3,
        /*firstName: 'Suman',
        lastName: 'Patra',*/
        name: 'JAVASCRIPT',
        active: true,
        description: 'sumanpatra688@gmail.com'
    },
    {
        id: 4,
        /*firstName: 'Deepak',
        lastName: 'Naik',*/
        name: 'REACTJS',
        active: true,
        description: '0001d1001d1001d1000@gmail.com'
    },
    {
        id: 5,
       /* firstName: 'Tukuna',
        lastName: 'Patro',*/
        name: 'NODEJS',
        active: true,
        description: 'tukuna.patro@gmail.com'
    },
    {
        id: 6,
        /*firstName: 'Swati',
        lastName: 'Sucharita',*/
        name: 'MONGODB',
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
