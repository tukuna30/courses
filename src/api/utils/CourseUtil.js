/* eslint-disable class-methods-use-this */
const courses = [
    {
        id: 1,
        name: 'HTML',
        description: 'Learn Basic structure of HTML Page',
        topics: [
            {
                title: 'HTML(Hyper Text Markup Language)',
                description:
                    'HTML is a method where ordinary text can be converted inti hypertext. It is the basic tools for  designing a web page.',
                sections: [
                    {
                        sectionTitle: 'Hyper Text',
                        sectionDescription:
                            'A way of creating multimedia documents, also a method for providing links  within the documents '
                    }
                ]
            }
        ]
    },

    {
        id: 2,
        /*firstName: 'Suman',
        lastName: 'Patra',*/
        name: 'CSS',
        questions: [],
        active: true,
        description: 'sumanpatra688@gmail.com'
    },
    {
        id: 3,
        /*firstName: 'Deepak',
        lastName: 'Naik',*/
        name: 'BOOTSTARP',
        questions: [],
        active: true,
        description: '0001d1001d1001d1000@gmail.com'
    },
    {
        id: 4,
        /* firstName: 'Tukuna',
        lastName: 'Patro',*/
        name: 'JAVASCRIPT',
        questions: [],
        active: true,
        description: 'tukuna.patro@gmail.com'
    },
    {
        id: 5,
        /*firstName: 'Swati',
        lastName: 'Sucharita',*/
        name: 'REACTJS',
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

class CourseUtil {
    getCourses() {
        return courses;
    }

    getCourse(id) {
        const course = courses.find((u) => {
            return u.id === parseInt(id, 10);
        });

        return course || {};
    }
}

module.exports = new CourseUtil();
