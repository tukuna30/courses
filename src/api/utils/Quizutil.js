/* eslint-disable class-methods-use-this */
const quizes = [
    {
        id: 1,
        name: 'HTML',
        questions: [
            {
                title: 'What does HTML stand for?',
                id: 'html1',
                options: [
                    'Hyper Text Machine language',
                    'Hyper Text Manmade Language',
                    'High Text machine language',
                    'Hyper Text Markup Language'
                ]
            },
            {
                title: 'Which one of the following is an inline element',
                id: 'html2',
                options: ['p', 'span', 'img', 'a']
            },
            {
                title: 'Pick the correct DocType syntax for HTML5',
                id: 'html3',
                options: [
                    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "DTD/xhtml1-strict.dtd">',
                    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 5.0 Strict//EN " http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',
                    '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" http://www.w3.org/TR/html4/frameset.dtd">',
                    '<!DOCTYPE html>'
                ]
            },
            {
                id: 'html4',
                title: 'Which one of the followings is used to render a sidebar?',
                options: ['article', 'aside', 'sidebar', 'section']
            },
            {
                id: 'html5',
                title: 'To make a div draggable which attribute is used',
                options: ['draggable', 'drag', 'drop', 'droppable']
            }
        ],
        answer: {
            html1: 'Hyper Text Markup Language',
            html2: 'span',
            html3: '<!DOCTYPE html>',
            html4: 'aside',
            html5: 'draggable'
        },
        active: true,
        description: 'A quiz about HTML'
    },
    {
        id: 2,
        name: 'CSS',
        questions: [
            {
                id: 'css1',
                title: 'Display flex CSS property is used for?',
                options: ['Flexible margin', 'Positioning', 'Layout', 'Floating']
            },
            {
                id: 'css2',
                title: 'Which value is not valid for positioning?',
                options: ['absolute', 'relative', 'dynamic', 'static']
            },
            {
                id: 'css3',
                title: 'Which one of the following rules is not valid?',
                options: [
                    'position: absolute;',
                    'margin: 20px !important;',
                    'border-bottom: 20%;',
                    'padding-center: 20px;'
                ]
            },
            {
                id: 'css4',
                title: 'Which property is used to set z-order of positioned elements?',
                options: ['z-index', 'order', 'position', 'display']
            },
            {
                id: 'css5',
                title: 'Select the valid pseudo element',
                options: ['::placeholder', ':checked', ':active', ':first-of-type']
            }
        ],
        answer: {
            css1: 'Layout',
            css2: 'dynamic',
            css3: 'padding-center: 20px;',
            css4: 'z-index',
            css5: '::placeholder'
        },
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
