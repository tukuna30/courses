/* eslint-disable class-methods-use-this */
const courses = [
    {
        id: 1,
        name: 'HTML',
        description: 'Learn Basic structure of HTML Page',
        chapters: [
            {
                title: 'Basic',
                description: 'HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications',

                topics: [
                    {

                        title: ' Why html is needed ',
                        topicDescription: 'Html is used to structure a web page.'
                    },
                    {
                        sectionTitle: 'Basic structure of a HTML file',
                        topicDescription:
                            'A way of creating multimedia documents, also a method for providing links  within the documents '
                    }
                ]
            },
            {
                title: 'Chapter 2',
                description: 'Chapter 2 description: Tags in HTML',
                topics: [
                    {
                        title: 'Why html is needed',
                        topicDescription: 'Html is used to structure a web page.'
                    },
                    {
                        sectionTitle: 'Basic structure of a HTML file',
                        topicDescription:
                            'A way of creating multimedia documents, also a method for providing links  within the documents '
                    }
                ]
            },
            {
                title: 'Chapter 3',
                description: 'Chapter 3 description: Details of various Tags in HTML',
                topics: [
                    {
                        title: 'Why html is needed',
                        topicDescription: 'Html is used to structure a web page.'
                    },
                    {
                        sectionTitle: 'Basic structure of a HTML file',
                        topicDescription:
                            'A way of creating multimedia documents, also a method for providing links  within the documents '
                    }
                ]
            },
            {
                title: 'Chapter 4',
                description: 'Chapter 3 description: Details of various Tags in HTML',
                topics: [
                    {
                        title: 'Why html is needed',
                        topicDescription: 'Html is used to structure a web page.'
                    },
                    {
                        sectionTitle: 'Basic structure of a HTML file',
                        topicDescription:
                            'A way of creating multimedia documents, also a method for providing links  within the documents '
                    }
                ]
            },
            {
                title: 'Chapter 5',
                description: 'Chapter 5 description: Details of various Tags in HTML',
                topics: [
                    {
                        title: 'Why html is needed',
                        topicDescription: 'Html is used to structure a web page.'
                    },
                    {
                        title: 'Basic structure of a HTML file',
                        topicDescription:
                            'A way of creating multimedia documents, also a method for providing links  within the documents '
                    }
                ]
            },
            {
                title: 'Chapter 6',
                description: 'Chapter 6 description: Details of various Tags in HTML',
                topics: [
                    {
                        title: 'Why html is needed',
                        topicDescription: 'Html is used to structure a web page.'
                    },
                    {
                        sectionTitle: 'Basic structure of a HTML file',
                        topicDescription:
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
