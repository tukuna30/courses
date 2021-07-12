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
                    time: 1625714924331,
                    blocks: [
                        {
                            id: 'iPx7T4drQP',
                            type: 'paragraph',
                            data: { text: '<b>What is HTML and why is it important&nbsp;?</b>' }
                        },
                        {
                            id: 'wlvG9tSFD9',
                            type: 'paragraph',
                            data: {
                                text:
                                    'HTML\nstands for hyper-text markup language.&nbsp;Whether on a mobile device or a\ncomputer, every website that you browse is designed with HTML. HTML isn’t a\n“programming language,” but rather a “formatting language.” It tells a browser\nhow to display text, images, and other media elements. When HTML was first\ndeveloped, it was fairly simple.'
                            }
                        },
                        {
                            id: '8aGWKqFkZ6',
                            type: 'paragraph',
                            data: { text: '<b>HTML Example</b>' }
                        },
                        {
                            id: '5fQBLQxUli',
                            type: 'code',
                            data: {
                                code:
                                    '<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html'
                            }
                        },
                        {
                            id: '1ppshCOZPH',
                            type: 'paragraph',
                            data: { text: '<b>Description of HTML Example</b>' }
                        },
                        {
                            id: '-zxrUa8mE7',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>&lt;!DOCTYPE&gt;:</b>&nbsp;It defines the document\ntype or it instruct the browser about the version of HTML.'
                            }
                        },
                        {
                            id: '58JjUxIpvr',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>&lt;html\n&gt;&nbsp;:</b>This tag\ninforms the browser that it is an HTML document. Text between html tag\ndescribes the web document. It is a container for all other elements of HTML\nexcept &lt;!DOCTYPE&gt;.'
                            }
                        },
                        {
                            id: 'gKCWmTdJll',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>&lt;head&gt;:</b>&nbsp;It should be the first\nelement inside the &lt;html&gt; element, which contains the\nmetadata(information about the document). It must be closed before the body tag\nopens.'
                            }
                        },
                        {
                            id: 'aldOD66I3B',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>&lt;title&gt;:&nbsp;</b>As its name suggested, it is used\nto add title of that HTML page which appears at the top of the browser window.\nIt must be placed inside the head tag and should close immediately. (Optional)'
                            }
                        },
                        {
                            id: 'cenKjAN3-_',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>&lt;body&gt;&nbsp;:</b> Text between body tag describes\nthe body content of the page that is visible to the end user. This tag contains\nthe main content of the HTML document.'
                            }
                        },
                        {
                            id: 'meKtAfaWZn',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>&lt;h1&gt;&nbsp;:</b> Text between &lt;h1&gt; tag describes\nthe first level heading of the webpage.'
                            }
                        },
                        {
                            id: 'M4oT5c1Ntr',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>&lt;p&gt;&nbsp;:</b> Text between &lt;p&gt; tag\ndescribes the paragraph of the webpage.'
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'Chapter 2',
                description: 'Chapter 2 description: Attributes & Elements',
                content: {
                    time: 1625310664980,
                    blocks: [
                        {
                            id: 'O8dXU9MU9_',
                            type: 'header',
                            data: { text: 'Attribute:-', level: 2 }
                        },
                        {
                            id: 'oZPRDoCYvt',
                            type: 'paragraph',
                            data: {
                                text:
                                    "<b>HTML attributes</b>&nbsp;are special words used inside the opening tag to control the element's behaviour. HTML attributes are a modifier of an&nbsp;HTML element type.&nbsp; &nbsp;"
                            }
                        },
                        {
                            id: 'ReP9WrgHwf',
                            type: 'image',
                            data: {
                                url:
                                    'https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2020/06/HTML-Attributes.jpg',
                                caption: 'ATTRIBUTES&nbsp;',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'rTng6JmZvJ',
                            type: 'paragraph',
                            data: {
                                text:
                                    "<b>HTML attributes generally appear as name-value pairs, separated by&nbsp;<code>=</code>, and are written within the start tag of an element, after the element's name:</b>"
                            }
                        },
                        {
                            id: 'DGv3sFuz9O',
                            type: 'code',
                            data: { code: '<element attribute="value">element content</element>\n' }
                        },
                        {
                            id: 'W9bpLYXWv3',
                            type: 'header',
                            data: { text: 'Elements:-', level: 2 }
                        },
                        {
                            id: 'elqszVwP9G',
                            type: 'header',
                            data: {
                                text:
                                    'HTML elements are defined with a starting tag, some content and an ending tag. This whole, together, is known as an HTML element.',
                                level: 4
                            }
                        },
                        {
                            id: '4ZcTu7FKml',
                            type: 'header',
                            data: { text: 'The basic elements of an HTML page are:', level: 2 }
                        },
                        {
                            id: 'SygBmmRTmh',
                            type: 'list',
                            data: {
                                style: 'unordered',
                                items: [
                                    'A text header, denoted using the&nbsp;&lt;h1&gt;,&nbsp;&lt;h2&gt;,&nbsp;&lt;h3&gt;,&nbsp;&lt;h4&gt;,&nbsp;&lt;h5&gt;,&nbsp;&lt;h6&gt;&nbsp;tags.',
                                    'A paragraph, denoted using the&nbsp;&lt;p&gt;&nbsp;tag.',
                                    'A horizontal ruler, denoted using the&nbsp;&lt;hr&gt;&nbsp;tag.',
                                    'A link, denoted using the&nbsp;&lt;a&gt;&nbsp;(anchor) tag.',
                                    'A list, denoted using the&nbsp;&lt;ul&gt;&nbsp;(unordered list),&nbsp;&lt;ol&gt;&nbsp;(ordered list) and&nbsp;&lt;li&gt;&nbsp;(list element) tags.',
                                    'An image, denoted using the&nbsp;&lt;img&gt;&nbsp;tag',
                                    'A divider, denoted using the&nbsp;&lt;div&gt;&nbsp;tag',
                                    'A text span, denoted using the&nbsp;&lt;span&gt;&nbsp;tag'
                                ]
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'Chapter 3',
                description: 'Chapter 3 description: Details of various Lists in HTML',
                content: {
                    time: 1625716999932,
                    blocks: [
                        {
                            id: 'SGytnqD4jA',
                            type: 'header',
                            data: { text: 'HTML LISTS:', level: 2 }
                        },
                        {
                            id: 'ecN3Y0ROZK',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Lists are used to group together related pieces of information so they are clearly associated with each other and easy to read. In modern web development, lists are workhorse elements, frequently used for navigation as well as general content.'
                            }
                        },
                        {
                            id: 'vKdHRHsGPh',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Lists are good from a structural point of view as they help create a well-structured, more accessible, easy-to-maintain document.&nbsp;'
                            }
                        },
                        {
                            id: 'UgTyIfZvmu',
                            type: 'header',
                            data: { text: 'THE THREE LIST TYPE:', level: 2 }
                        },
                        {
                            id: 'hblaabMSDt',
                            type: 'paragraph',
                            data: { text: '<b>1.<i>UNORDERED LIST:-</i></b>' }
                        },
                        {
                            id: 'YoHISkiQZn',
                            type: 'paragraph',
                            data: {
                                text:
                                    'An unordered list starts with the&nbsp;<code>&lt;ul&gt;</code>&nbsp;tag. Each list item starts with the&nbsp;<code>&lt;li&gt;</code>&nbsp;tag.'
                            }
                        },
                        {
                            id: 'YNGm0R93hI',
                            type: 'paragraph',
                            data: {
                                text: 'The list items will be marked with bullets&nbsp; by default.'
                            }
                        },
                        {
                            id: 'XccNVVrFHx',
                            type: 'paragraph',
                            data: { text: '<b><i>2.ORDERED LIST:-</i></b>' }
                        },
                        {
                            id: 'OCurh2WGl8',
                            type: 'paragraph',
                            data: {
                                text:
                                    'An ordered list starts with the&nbsp;<code>&lt;ol&gt;</code>&nbsp;tag. Each list item starts with the&nbsp;<code>&lt;li&gt;</code>&nbsp;tag.'
                            }
                        },
                        {
                            id: 'qNPjXJ1rbz',
                            type: 'paragraph',
                            data: { text: 'The list items will be marked with numbers by default.' }
                        },
                        {
                            id: 'WRduRM_Dyf',
                            type: 'paragraph',
                            data: { text: '<b><i>3.DESCRIPTION LIST:-</i></b>' }
                        },
                        {
                            id: 'iTOSDCl9VI',
                            type: 'paragraph',
                            data: {
                                text:
                                    'A description list is a list of terms, with a description of each term.'
                            }
                        },
                        {
                            id: 'RpjEGIQ0wI',
                            type: 'paragraph',
                            data: {
                                text:
                                    'The&nbsp;<code>&lt;dl&gt;</code>&nbsp;tag defines the description list, the&nbsp;<code>&lt;dt&gt;</code>&nbsp;tag defines the term (name), and the&nbsp;<code>&lt;dd&gt;</code>&nbsp;tag describes each term.'
                            }
                        },
                        {
                            id: '86oT3lEZwO',
                            type: 'image',
                            data: {
                                url:
                                    'https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2020/07/html-lists-df.jpg',
                                caption: 'Example&nbsp;',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'KB3Q5zHgPs',
                            type: 'header',
                            data: { text: 'Advantages of Lists in HTML:-', level: 2 }
                        },
                        {
                            id: '4YWVlu9UFe',
                            type: 'paragraph',
                            data: {
                                text:
                                    '1. Proper semantics of an HTML document are maintained using an HTML list. It removes the confusion since words are not jumbled in a single line and can be easily comprehended.'
                            }
                        },
                        {
                            id: 'yM3p-KLAxi',
                            type: 'paragraph',
                            data: {
                                text:
                                    '2. CSS styles can be easily applied to HTML lists, by accessing the &lt;li&gt; tags.'
                            }
                        },
                        {
                            id: '3sVfr47uK5',
                            type: 'paragraph',
                            data: {
                                text:
                                    '3.&nbsp;HTML lists provide flexibility as the order of the lists can be easily changed.'
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'Chapter 4',
                description: 'Chapter 3 description: Classes & ID',
                content: {
                    time: 1625744517630,
                    blocks: [
                        {
                            id: 'uqOBcyc6My',
                            type: 'paragraph',
                            data: { text: '<b>CLASSES &amp; ID:-</b>' }
                        },
                        {
                            id: 'e-Ceqfw5ky',
                            type: 'paragraph',
                            data: {
                                text:
                                    '·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\nThe class is an attribute which specifies one or more class names for an\nHTML element.'
                            }
                        },
                        {
                            id: 'owres0JM56',
                            type: 'paragraph',
                            data: {
                                text:
                                    '·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\nThe class attribute can be used on any HTML element.'
                            }
                        },
                        {
                            id: 'MgYSFhNBH3',
                            type: 'paragraph',
                            data: {
                                text:
                                    '·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\nThe class name can be used by CSS and JavaScript to perform certain\ntasks for elements with the specified class name.'
                            }
                        },
                        {
                            id: '-X34aQ47W8',
                            type: 'code',
                            data: {
                                code:
                                    '<!DOCTYPE html>\n<html>\n\n<head>\n\t<style>\n\t\t.country {\n\t\t\tbackground-color: black;\n\t\t\tcolor: white;\n\t\t\tpadding: 8px;\n\t\t}\n\t</style>\n</head>\n\n<body>\n\n\t<h2 class="country">CHINA</h2>\n\t<p>China has the largest population\n\tin the world.</p>\n\n\t<h2 class="country">INDIA</h2>\n\t<p>India has the second largest\n\tpopulation in the world.</p>\n\n\t<h2 class="country">UNITED STATES</h2>\n\t<p>United States has the third largest\n\tpopulation in the world.</p>\n\n</body>\n\n</html>\n'
                            }
                        },
                        {
                            id: 'MXaZGEG3aY',
                            type: 'paragraph',
                            data: { text: '<b><i>OUTPUT</i></b>' }
                        },
                        {
                            id: 'e8XVOYZUpD',
                            type: 'image',
                            data: {
                                url:
                                    'https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-22-at-12.59.20-AM.png',
                                caption: '',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'o9fjgsnme7',
                            type: 'paragraph',
                            data: {
                                text:
                                    'The&nbsp;<b>id attribute</b>&nbsp;is\na unique identifier which is used to specify the document. It is used by CSS\nand JavaScript to perform a certain task for a unique element. In CSS, the id\nattribute is used using # symbol.\n\n\n\n'
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'Chapter 5',
                description: 'Chapter 5 description: Link css',
                content: {
                    time: 1625745233889,
                    blocks: [
                        {
                            id: 'kWbyqsZBns',
                            type: 'header',
                            data: { text: 'LINK CSS TO HTML :-', level: 2 }
                        },
                        {
                            id: 'owEH8_-y86',
                            type: 'paragraph',
                            data: {
                                text:
                                    'In HTML, we can easily link the style sheet to the Html document in the following different three methods:'
                            }
                        },
                        {
                            id: 'geft5D3BA5',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: [
                                    '&nbsp;Inline Style',
                                    'Embedded Style or Internal Style',
                                    'External style&nbsp;'
                                ]
                            }
                        },
                        {
                            id: 'PJD5oy-Eer',
                            type: 'image',
                            data: {
                                url:
                                    'https://wholeblogs.com/wp-content/uploads/2021/03/imageof3-1-1.jpg',
                                caption: '',
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
                title: 'Chapter 6',
                description: 'Chapter 6 description: Audio & video',
                content: {
                    time: 1625746911587,
                    blocks: [
                        {
                            id: 'agXG5VPB_r',
                            type: 'header',
                            data: { text: 'AUDIO TAG:-', level: 2 }
                        },
                        {
                            id: 'w38wAqQIjv',
                            type: 'paragraph',
                            data: {
                                text:
                                    'HTML <b><i>Audio tag</i></b>&nbsp;is used to play audio files, like&nbsp;mp3,&nbsp;ogg&nbsp;and&nbsp;AAC. All browsers supporting&nbsp;audio tag&nbsp;are having build in player.'
                            }
                        },
                        {
                            id: 'km7w-lYvzC',
                            type: 'paragraph',
                            data: {
                                text:
                                    'The easiest way to include&nbsp;Audio Tag&nbsp;in a webpage is to use&nbsp;audio tag.&nbsp;<code>src</code>&nbsp;is compulsory attribute in audio tag.&nbsp;<code>controls</code>&nbsp;attribute can show control bar to user. User can play/pause, change time line, mute, and increase volume of audio playing using controls.'
                            }
                        },
                        {
                            id: 'd_LrGS_3sU',
                            type: 'image',
                            data: {
                                url:
                                    'https://res.cloudinary.com/practicaldev/image/fetch/s--MA5hKls8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/wh2li7815smb450m1c19.png',
                                caption: '',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'DRdvuxEdKQ',
                            type: 'header',
                            data: { text: 'VIDEO&nbsp; TAG:-', level: 2 }
                        },
                        {
                            id: 'EK2yNfjmoP',
                            type: 'paragraph',
                            data: {
                                text:
                                    'HTML <b><i>Video tag&nbsp;</i></b>or&nbsp;&lt;video&gt;&nbsp;is used to add\nvideos on a webpage. Video tag\nsupports&nbsp;mp4,&nbsp;ogg,&nbsp;mov&nbsp;and&nbsp;H.264&nbsp;files.'
                            }
                        },
                        {
                            id: '6DGurZ0wIh',
                            type: 'paragraph',
                            data: {
                                text:
                                    'To embed a video, create a video tag.&nbsp;src&nbsp;is compulsory attribute\nfor video tag.&nbsp;controls&nbsp;attribute can add play/pause button, video\ntimeline, mute button, volume controller, full screen.'
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            }
        ],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
    },

    {
        id: 2,
        name: 'CSS',
        chapters: [],
        active: true,
        description: 'JS, the language of web!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
    },
    {
        id: 4,
        name: 'REACTJS',
        chapters: [],
        active: true,
        description: 'ReactJS, popular and modern frontend library',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
        id: 5,
        name: 'NODEJS',
        chapters: [],
        active: true,
        description: 'Backend using JS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
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
