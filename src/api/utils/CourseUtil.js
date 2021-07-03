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
                    {
                "time": 1625293469239, "blocks": [{ "id": "qwzsPTgM0K", "type": "paragraph", "data": { "text": "<b>What is HTML and why is it important&nbsp;?</b>" } }, { "id": "ObJ07RQ_bl", "type": "paragraph", "data": { "text": "HTML\nstands for hyper-text markup language.&nbsp;Whether on a mobile device or a\ncomputer, every website that you browse is designed with HTML. HTML isn’t a\n“programming language,” but rather a “formatting language.” It tells a browser\nhow to display text, images, and other media elements. When HTML was first\ndeveloped, it was fairly simple." } }, { "id": "lcfyf0ypeH", "type": "paragraph", "data": { "text": "<b>HTML Example</b>" } }, { "id": "zX_ViBtseU", "type": "code", "data": { "code": "<!DOCTYPE>  \n<html>  \n<head>  \n<title>Web page title</title>  \n</head>  \n<body>  \n<h1>Write Your First Heading</h1>  \n<p>Write Your First Paragraph.</p>  \n</body>  \n</html>  \n" } }, { "id": "vPyMQ4BnsB", "type": "paragraph", "data": { "text": "<b>Description of HTML Example</b>" } }, { "id": "aQBjTRVuf6", "type": "paragraph", "data": { "text": "<b>&lt;!DOCTYPE&gt;:</b>&nbsp;It defines the document\ntype or it instruct the browser about the version of HTML." } }, { "id": "p7cxQMHauf", "type": "paragraph", "data": { "text": "<b>&lt;html\n&gt;&nbsp;:</b>This tag\ninforms the browser that it is an HTML document. Text between html tag\ndescribes the web document. It is a container for all other elements of HTML\nexcept &lt;!DOCTYPE&gt;." } }, { "id": "b3lROfDTq5", "type": "paragraph", "data": { "text": "<b>&lt;head&gt;:</b>&nbsp;It should be the first\nelement inside the &lt;html&gt; element, which contains the\nmetadata(information about the document). It must be closed before the body tag\nopens." } }, { "id": "mTCkFdA03_", "type": "paragraph", "data": { "text": "<b>&lt;title&gt;:&nbsp;</b>As its name suggested, it is used\nto add title of that HTML page which appears at the top of the browser window.\nIt must be placed inside the head tag and should close immediately. (Optional)" } }, { "id": "5zLnRmyMRa", "type": "paragraph", "data": { "text": "<b>&lt;body&gt;&nbsp;:</b> Text between body tag describes\nthe body content of the page that is visible to the end user. This tag contains\nthe main content of the HTML document." } }, { "id": "Rewk3dWL3I", "type": "paragraph", "data": { "text": "<b>&lt;h1&gt;&nbsp;:</b> Text between &lt;h1&gt; tag describes\nthe first level heading of the webpage." } },
                { "id": "Lquyn57d0r", "type": "paragraph", "data": { "text": "<b>&lt;p&gt;&nbsp;:</b> Text between &lt;p&gt; tag\ndescribes the paragraph of the webpage." } }], "version": "2.22.1"
            }
                   /*  time: 1625282357336,
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
            }, */
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
