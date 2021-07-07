/* eslint-disable class-methods-use-this */
const courses = [
    {
        id: 1,
        name: 'HTML',
        description: 'Learn Basic structure of HTML Page',
        chapters: [
            {
                title: 'Chapter 1',
                description: 'Chapter 1 description: Introduction to HTML',
                content: {
                    time: 1625282357336,
                    blocks: [
                        {
                            id: 'xj4nRn0T2c',
                            type: 'header',
                            data: {
                                text:
                                    'HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title suggests, this article will give you a basic understanding of HTML and its functions.',
                                level: 4
                            }
                        },
                        {
                            id: '5qVR1P5UgQ',
                            type: 'code',
                            data: {
                                code:
                                    '<p>My cat is very grumpy</p>\n<div>My cat is very grumpy</div>\n\n\n<a href="externalLink">My cat is very grumpy</div>'
                            }
                        },
                        {
                            id: '46aFe0PVx8',
                            type: 'paragraph',
                            data: { text: 'Structure of html, see below image' }
                        },
                        {
                            id: 'tnrfKb_7qn',
                            type: 'image',
                            data: {
                                url:
                                    'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png',
                                caption: 'Tag structure',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'Chapter 2',
                description: 'Chapter 2 description: Tags in HTML',
                content: {
                    time: 1625282357336,
                    blocks: [
                        {
                            id: 'xj4nRn0T2c',
                            type: 'header',
                            data: {
                                text:
                                    'Welcome to chapter 2. Its about audio tags that is used to play music in a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title suggests, this article will give you a basic understanding of HTML and its functions.',
                                level: 4
                            }
                        },
                        {
                            id: '5qVR1P5UgQ',
                            type: 'code',
                            data: {
                                code:
                                    '<p>My cat is very grumpy</p>\n<div>My cat is very grumpy</div>\n\n\n<a href="externalLink">My cat is very grumpy</div>'
                            }
                        },
                        {
                            id: '46aFe0PVx8',
                            type: 'paragraph',
                            data: { text: 'Structure of html, see below image' }
                        },
                        {
                            id: 'tnrfKb_7qn',
                            type: 'image',
                            data: {
                                url:
                                    'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png',
                                caption: 'Tag structure',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        }
                    ],
                    version: '2.22.1'
                }
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
        id: 3,
        name: 'JAVASCRIPT',
        questions: [],
        active: true,
        description: 'JS, the language of web!'
    },
    {
        id: 4,
        name: 'REACTJS',
        active: true,
        description: 'ReactJS, popular and modern frontend library'
    },
    {
        id: 5,
        name: 'NODEJS',
        active: true,
        description: 'Backend using JS'
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
