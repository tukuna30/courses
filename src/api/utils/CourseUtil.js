/* eslint-disable class-methods-use-this */
const courses = [
    {
        id: 1,
        name: 'HTML',
        description: 'HYPERTEXT MARKUP LANGUAGE',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png',
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
        ]
    },

    {
        id: 2,
        name: 'CSS',
        description: 'CASCADING STYLE SHEETS',
        chapters: [
            {
                title: 'Chapter 1',
                description: 'Chapter 1 description: Introduction to CSS',
                content: {
                    time: 1626071942063,
                    blocks: [
                        {
                            id: '79jk7yz-st',
                            type: 'header',
                            data: { text: 'What Is CSS?', level: 2 }
                        },
                        {
                            id: '-Q3FAlWQo-',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>C</b>ascading&nbsp;<b>S</b>tyle&nbsp;<b>S</b>heets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.'
                            }
                        },
                        {
                            id: '7YyTzmzuKk',
                            type: 'paragraph',
                            data: {
                                text:
                                    'CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects.'
                            }
                        },
                        {
                            id: 'QPq_cVlBHN',
                            type: 'header',
                            data: { text: 'Advantages of CSS:-', level: 2 }
                        },
                        {
                            id: 'OAi2fyqaeG',
                            type: 'paragraph',
                            data: {
                                text:
                                    '·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<b>CSS saves time</b>&nbsp;− You can\nwrite CSS once and then reuse same sheet in multiple HTML pages. You can define\na style for each HTML element and apply it to as many Web pages as you want.'
                            }
                        },
                        {
                            id: 'UiKvqdFoqH',
                            type: 'paragraph',
                            data: {
                                text:
                                    '·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<b>Pages load faster</b>&nbsp;− If you\nare using CSS, you do not need to write HTML tag attributes every time. Just\nwrite one CSS rule of a tag and apply it to all the occurrences of that tag. So\nless code means faster download times.<b></b>'
                            }
                        },
                        {
                            id: 'aZMCr8GJPq',
                            type: 'paragraph',
                            data: {
                                text:
                                    '·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<b>Easy maintenance</b>&nbsp;− To make\na global change, simply change the style, and all elements in all the web pages\nwill be updated automatically.<b></b>'
                            }
                        },
                        {
                            id: 'YdJ_xnulzC',
                            type: 'paragraph',
                            data: {
                                text:
                                    '·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<b>Superior styles to HTML</b>&nbsp;− CSS has\na much wider array of attributes than HTML, so you can give a far better look\nto your HTML page in comparison to HTML attributes.'
                            }
                        },
                        {
                            id: 'oKrRkiV1z8',
                            type: 'paragraph',
                            data: {
                                text:
                                    '·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<b>Multiple Device Compatibility</b>&nbsp;−\nStyle sheets allow content to be optimized for more than one type of device. By\nusing the same HTML document, different versions of a website can be presented\nfor handheld devices such as PDAs and cell phones or for printing.'
                            }
                        },
                        {
                            id: 'SYdnRpbedJ',
                            type: 'paragraph',
                            data: {
                                text:
                                    '·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<b>Global web standards</b>&nbsp;−\nNow HTML attributes are being deprecated and it is being recommended to use\nCSS. So its a good idea to start using CSS in all the HTML pages to make them\ncompatible to future browsers.'
                            }
                        },
                        {
                            id: 'orCEysYBSV',
                            type: 'header',
                            data: { text: 'TYPES OF CSS:-', level: 2 }
                        },
                        {
                            id: 'njym52Xz0Y',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b><i>&nbsp; &nbsp;There are three types of CSS which are given below:-</i></b>'
                            }
                        },
                        {
                            id: 'SsQAe0XAyN',
                            type: 'image',
                            data: {
                                url:
                                    'https://miro.medium.com/max/1400/1*vMDthM9qBLsONvClseM_ew.png',
                                caption: 'INLINE',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: '6kN4EdbOCJ',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>Inline\nCSS:-</b> Inline CSS contains the CSS property in the body section attached\nwith element is known as inline CSS.'
                            }
                        },
                        {
                            id: 'Z6nI01_cKA',
                            type: 'image',
                            data: {
                                url:
                                    'https://www.wikitechy.com/css/img/css-images/css-external.png',
                                caption: 'EXTERNAL',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: '3txrJHoeqv',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>External\nCSS:-&nbsp;</b> External CSS contains separate CSS file which contains only style\nproperty with the help of tag attributes (For example class, id, heading, …\netc). CSS property written in a separate file with .css extension and should be\nlinked to the HTML document using&nbsp;link&nbsp;tag. '
                            }
                        },
                        {
                            id: '8aT7RbywAj',
                            type: 'image',
                            data: {
                                url:
                                    'https://www.wikitechy.com/css/img/css-images/code-explanation-css-internal-style-sheet.png',
                                caption: 'INTERNAL',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'MYkxpEKqCM',
                            type: 'paragraph',
                            data: {
                                text:
                                    '&nbsp;<b>Internal or Embedded CSS</b>:&nbsp;-This\ncan be used when a single HTML document must be styled uniquely. The CSS rule\nset should be within the HTML file in the head section i.e the CSS is embedded\nwithin the HTML file.&nbsp;'
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },

            {
                title: 'Chapter 2',
                description: 'Chapter 1 description: BOX MODEL',
                content: {
                    time: 1626072599447,
                    blocks: [
                        { id: 'm3MuHJMKdT', type: 'header', data: { text: 'BOX MODEL', level: 2 } },
                        {
                            id: 'fF6Jt84SyY',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Every element in an HTML document is rendered as a rectangular box by the browser. The width, height, padding and margin determine the space allocated in an around the element. The following diagram illustrates the box model concept −'
                            }
                        },
                        {
                            id: 'l4XXA5FRdO',
                            type: 'image',
                            data: {
                                url:
                                    'https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png',
                                caption: 'BOX MODEL',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'Xq_-iPtPTd',
                            type: 'header',
                            data: { text: 'Content&nbsp;', level: 2 }
                        },
                        {
                            id: 'oJ1mCp4aKW',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Material such as text, photographs, or other digital media is included in this area.It is constrained by the information edge, and its proportions are dictated by the width and height of the content enclosure.'
                            }
                        },
                        {
                            id: 'KBhSzTLyEG',
                            type: 'header',
                            data: { text: 'Padding&nbsp;', level: 2 }
                        },
                        {
                            id: 'sYxaL7K9gc',
                            type: 'paragraph',
                            data: {
                                text:
                                    'This field requires the padding of the component. In essence, this area is the space around the subject area and inside the border-box. The height and the width of the padding box decide its proportions.'
                            }
                        },
                        { id: 'NhACR-ZpDB', type: 'header', data: { text: 'Border', level: 2 } },
                        {
                            id: 'Vuk9A3T4XK',
                            type: 'paragraph',
                            data: {
                                text:
                                    'It is a region between the padding-box and the margin. Its proportions are determined by the width and height of the boundary.'
                            }
                        },
                        {
                            id: 'yJNsWuhPlt',
                            type: 'header',
                            data: { text: 'Margin&nbsp;', level: 2 }
                        },
                        {
                            id: 'zD_rZNTPSP',
                            type: 'paragraph',
                            data: {
                                text:
                                    'This segment consists of the area between the boundary and the edge of the border.The proportion of the margin region is equal to the margin-box width and height. It is better to separate the product from its neighbor nodes.'
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },

            {
                title: 'Chapter 3',
                description: 'Chapter 1 description: SELECTORS',
                content: {
                    time: 1626081804730,
                    blocks: [
                        { id: 'KJjiyg_h4-', type: 'header', data: { text: 'SELECTORS', level: 2 } },
                        {
                            id: '7KPNdHbYv1',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>CSS selectors</b>&nbsp;are used&nbsp;to select the content you want to style. Selectors are the part of CSS rule set. CSS selectors select HTML elements according to its id, class, type, attribute etc.'
                            }
                        },
                        {
                            id: 'zBvf598s3c',
                            type: 'paragraph',
                            data: { text: 'There are several different types of selectors in CSS.' }
                        },
                        {
                            id: '5-_56jOSex',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: [
                                    'CSS Element Selector',
                                    'CSS Id Selector',
                                    'CSS Class Selector',
                                    'CSS Universal Selector',
                                    'CSS Group Selector'
                                ]
                            }
                        },
                        {
                            id: 'EKOy6Xp85j',
                            type: 'image',
                            data: {
                                url:
                                    'https://i.pinimg.com/originals/bc/97/96/bc97965579512f8a6d2303934f599c65.png',
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
                title: 'Chapter 4',
                description: 'Chapter 1 description: POSITION',
                content: {
                    time: 1626082484352,
                    blocks: [
                        {
                            id: '-s5LJhKzwI',
                            type: 'header',
                            data: { text: 'CSS POSITION:-', level: 2 }
                        },
                        {
                            id: 'jd5fsR6o4c',
                            type: 'paragraph',
                            data: {
                                text:
                                    'The&nbsp;CSS position property&nbsp;is used&nbsp;to set position for an element. it is also used to place an element behind another and also useful for scripted animation effect.'
                            }
                        },
                        {
                            id: '9E3Xov0ZZ-',
                            type: 'header',
                            data: { text: '1) CSS Static Positioning', level: 2 }
                        },
                        {
                            id: 'GvlC0cLrSE',
                            type: 'paragraph',
                            data: {
                                text:
                                    'This is a by default position for HTML elements. It always positions an element according to the normal flow of the page. It is not affected by the top, bottom, left and right properties.'
                            }
                        },
                        {
                            id: 'D8rSwrU-Ia',
                            type: 'header',
                            data: { text: '2) CSS Fixed Positioning', level: 2 }
                        },
                        {
                            id: 'xRPSdhUfgL',
                            type: 'paragraph',
                            data: {
                                text:
                                    "The fixed positioning property helps to put the text fixed on the browser. This fixed test is positioned relative to the browser window, and doesn't move even you scroll the window."
                            }
                        },
                        {
                            id: '4OSU1Kfp8s',
                            type: 'header',
                            data: { text: '3) CSS Relative Positioning', level: 2 }
                        },
                        {
                            id: 'wXc-FSG7O5',
                            type: 'paragraph',
                            data: {
                                text:
                                    'The relative positioning property is used to set the element relative to its normal position.'
                            }
                        },
                        {
                            id: '9mmbOcNKae',
                            type: 'header',
                            data: { text: '4) CSS Absolute Positioning', level: 2 }
                        },
                        {
                            id: '7qvfuqm8Te',
                            type: 'paragraph',
                            data: {
                                text:
                                    'The absolute positioning is used to position an element relative to the first parent element that has a position other than static.&nbsp;'
                            }
                        },
                        {
                            id: 'SPa3u2qryf',
                            type: 'header',
                            data: { text: '5) CSS Sticky Positioning', level: 2 }
                        },
                        {
                            id: 'I3-Vzh7mLS',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Sticky positioning&nbsp;can be thought of as a hybrid of relative and fixed&nbsp;positioning.&nbsp; &nbsp;'
                            }
                        },
                        {
                            id: 'yXidNnEEqm',
                            type: 'image',
                            data: {
                                url:
                                    'https://i.pinimg.com/736x/ab/36/1d/ab361d33a7fccd7f2958b3963ce1c302.jpg',
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
                title: 'Chapter 5',
                description: 'Chapter 1 description: SPECIFICITY',
                content: {
                    time: 1626082787910,
                    blocks: [
                        {
                            id: 'dGNBDGt1iH',
                            type: 'header',
                            data: { text: 'SPECIFICITY', level: 2 }
                        },
                        {
                            id: 'DKd9xOqofU',
                            type: 'paragraph',
                            data: {
                                text:
                                    'When more than one set of CSS rules apply to the same element, the browser will have to decide which specific set will be applied to the element. The rules the browser follows are collectively called&nbsp;Specificity'
                            }
                        },
                        {
                            id: 'NkVF19oPVT',
                            type: 'paragraph',
                            data: { text: 'Specificity Rules include:' }
                        },
                        {
                            id: 'JL-eXxMcdT',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: [
                                    'CSS style applied by referencing external stylesheet has lowest precedence and is overridden by Internal and inline CSS.',
                                    'Internal CSS is overridden by inline CSS.',
                                    'Inline CSS has highest priority and overrides all other selectors.'
                                ]
                            }
                        },
                        {
                            id: 'QSjy2ykukY',
                            type: 'header',
                            data: { text: 'Specificity hierarchy', level: 2 }
                        },
                        {
                            id: 'DUnWAfIYZI',
                            type: 'paragraph',
                            data: {
                                text:
                                    "Each selector has a place in the hierarchy. There are mainly four categories that define the selector's specificity level:"
                            }
                        },
                        {
                            id: '66krZUgh1R',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Inline styles:&nbsp;It is directly attached to the element which is to be styled. For example: &lt;p style="color: red;"&gt;. It has the highest priority.'
                            }
                        },
                        {
                            id: 'FB2e_V0xQM',
                            type: 'paragraph',
                            data: {
                                text:
                                    'IDs:&nbsp;It is a unique identifier for the elements of a page that has the second-highest priority. For example: #para.'
                            }
                        },
                        {
                            id: 'IERp8RqUxt',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Classes, attributes, and pseudo-classes:&nbsp;It includes classes, attributes, and pseudo-classes (like :focus, :hover, etc.).'
                            }
                        },
                        {
                            id: 'sLKHUXsH9G',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Elements and pseudo-elements:&nbsp;It includes the name of elements (div, h1) and pseudo-elements (like :after and :before). They have the lowest priority.'
                            }
                        },
                        {
                            id: '1qw2XEILrR',
                            type: 'image',
                            data: {
                                url:
                                    'https://static.javatpoint.com/csspages/images/css-specificity.png',
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
                description: 'Chapter 1 description: RESPONSIVE LAYOUT',
                content: {
                    time: 1626083076483,
                    blocks: [
                        {
                            id: 'Y1wmvk2dF5',
                            type: 'header',
                            data: { text: 'RESPONSIVE LAYOUT:-', level: 2 }
                        },
                        {
                            id: '40QV4cFB_s',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Responsive web design provides an optimal experience, easy reading and easy navigation with a minimum of resizing on different devices such as desktops, mobiles and tabs).'
                            }
                        },
                        {
                            id: 'nKNQ1SSwP1',
                            type: 'paragraph',
                            data: {
                                text:
                                    'A responsive web design will automatically adjust for different screen sizes and viewports.'
                            }
                        },
                        {
                            id: 'j6x9h7qnMx',
                            type: 'image',
                            data: {
                                url: 'https://www.w3schools.com/css/img_temp_band.jpg',
                                caption: '',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            }
        ]
    },

    {
        id: 3,
        name: 'JAVASCRIPT',
        description: 'Basic JS',
        chapters: [
            {
                title: 'Chapter 1',
                description: 'Chapter 1 description: Introduction to HTML',
                content: {
                    time: 1626085231812,
                    blocks: [
                        {
                            id: 'GOXNTQwdhd',
                            type: 'header',
                            data: { text: 'What Is JavaScript?', level: 2 }
                        },
                        {
                            id: 's3v4ZAOjuI',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>JavaScript</b>&nbsp;is a lightweight, interpreted&nbsp;<b>programming</b>&nbsp;language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java.&nbsp;<b>JavaScript</b>&nbsp;is very easy to implement because it is integrated with HTML. It is open and cross-platform.'
                            }
                        },
                        {
                            id: '09JGtUmOx2',
                            type: 'header',
                            data: { text: 'Why Learn JavaScript?', level: 3 }
                        },
                        {
                            id: 'oN5mbTfqny',
                            type: 'paragraph',
                            data: {
                                text:
                                    'JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one.'
                            }
                        },
                        {
                            id: '2xzZY61alj',
                            type: 'header',
                            data: { text: 'Hello World using Javascript', level: 2 }
                        },
                        {
                            id: 'fV070Yo_4a',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Just to give you a little excitement about&nbsp;<b>Javascript programming</b>,&nbsp;'
                            }
                        },
                        {
                            id: 'VrzGsnBe4P',
                            type: 'code',
                            data: {
                                code:
                                    '<html>\n   <body>   \n      <script language = "javascript" type = "text/javascript">\n         <!--\n            document.write("Hello World!")\n         //-->\n      </script>      \n   </body>\n</html>\n'
                            }
                        },
                        {
                            id: 'DzbrCvCDJO',
                            type: 'header',
                            data: { text: 'Applications of Javascript Programming', level: 2 }
                        },
                        {
                            id: 'NRx834sLD6',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>Client side validation</b>&nbsp;- This is really important to verify any user input before\nsubmitting it to the server and Javascript plays an important role in validting\nthose inputs at front-end itself.'
                            }
                        },
                        {
                            id: '63KNKkO7b-',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>Manipulating HTML Pages</b>&nbsp;- Javascript helps in manipulating HTML page on the fly. This\nhelps in adding and deleting any HTML tag very easily using javascript and\nmodify your HTML to change its look and feel based on different devices and\nrequirements.'
                            }
                        },
                        {
                            id: 'tse_q-d5Qb',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>User Notifications</b>&nbsp;- You can use Javascript to raise dynamic pop-ups on the\nwebpages to give different types of notifications to your website visitors.'
                            }
                        },
                        {
                            id: 'gHKktMQIAW',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>Back-end Data Loading</b>&nbsp;- Javascript provides Ajax library which helps in loading\nback-end data while you are doing some other processing. This really gives an\namazing experience to your website visitors.'
                            }
                        },
                        {
                            id: 'eFayRNtTy2',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>Presentations</b>&nbsp;- JavaScript also provides the facility of creating\npresentations which gives website look and feel. JavaScript provides RevealJS\nand BespokeJS libraries to build a web-based slide presentations.'
                            }
                        },
                        {
                            id: 'D-av75dAwT',
                            type: 'paragraph',
                            data: {
                                text:
                                    "<b>Server Applications</b>&nbsp;- Node JS is built on Chrome's Javascript runtime for\nbuilding fast and scalable network applications. This is an event based library\nwhich helps in developing very sophisticated server applications including Web\nServers."
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'Chapter 2',
                description: 'Chapter 1 description: Introduction to HTML',
                content: {
                    time: 1626085849413,
                    blocks: [
                        {
                            id: 'khcBbpyAMp',
                            type: 'header',
                            data: { text: 'JavaScript Objects', level: 1 }
                        },
                        {
                            id: 'MVZBaIlUp8',
                            type: 'paragraph',
                            data: {
                                text:
                                    'A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, keyboard, monitor etc.JavaScript is an object-based language. Everything is an object in JavaScript.'
                            }
                        },
                        {
                            id: 'tOxMAAaIBK',
                            type: 'header',
                            data: { text: 'Creating Objects in JavaScript', level: 2 }
                        },
                        {
                            id: 'oR7SWuLXy5',
                            type: 'paragraph',
                            data: { text: 'There are 3 ways to create objects:-' }
                        },
                        {
                            id: 'mzTbJRpcUP',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: [
                                    'By object literal',
                                    'By creating instance of Object directly (using new keyword)',
                                    'By using an object constructor (using new keyword)'
                                ]
                            }
                        },
                        {
                            id: 'Hf9jVgbeDf',
                            type: 'image',
                            data: {
                                url:
                                    'https://www.javascripttutorial.net/wp-content/uploads/2016/09/Create-Objects-in-JavaScript-Prototype-Pattern.png',
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
                title: 'Chapter 3',
                description: 'Chapter 1 description: Introduction to HTML',
                content: {
                    time: 1626349505681,
                    blocks: [
                        {
                            id: 'FkbSd5RGtE',
                            type: 'header',
                            data: { text: 'OPERATORS:-', level: 2 }
                        },
                        {
                            id: 'cfT0K8yKNd',
                            type: 'paragraph',
                            data: {
                                text:
                                    'An <b><i>operator</i></b> performs some operation on single or multiple operands (data value) and produces a result.'
                            }
                        },
                        {
                            id: 'FPISks07no',
                            type: 'paragraph',
                            data: { text: '&nbsp; &nbsp; &nbsp;' }
                        },
                        {
                            id: 'J4krnNK9se',
                            type: 'list',
                            data: {
                                style: 'unordered',
                                items: [
                                    'Arithmetic Operators',
                                    'Comparison Operators',
                                    'Logical Operators',
                                    'Assignment Operators',
                                    'Ternary Operators'
                                ]
                            }
                        },
                        {
                            id: '4l5U7ecxtl',
                            type: 'header',
                            data: { text: 'Arithmetic operators:-', level: 2 }
                        },
                        {
                            id: 'cBQjdHhuAK',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Arithmetic operators are used to perform mathematical operations between numeric operands.'
                            }
                        },
                        {
                            id: 'A-BJgiJI26',
                            type: 'image',
                            data: {
                                url:
                                    'https://www.devopsschool.com/blog/wp-content/uploads/2020/07/JavaScript-Arithmatic-Operators.png',
                                caption: 'Arithmetic',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'M8ofq2MTUu',
                            type: 'header',
                            data: { text: 'Comperision operators:-', level: 2 }
                        },
                        {
                            id: 'H5v-SPBZyA',
                            type: 'paragraph',
                            data: {
                                text:
                                    'JavaScript language includes operators that compare two operands and return Boolean value true or false.'
                            }
                        },
                        {
                            id: 'pyNT1BrdQL',
                            type: 'image',
                            data: {
                                url:
                                    'https://fundamentals.generalassemb.ly/08_unit/assets/logical-operators-boolean/comparison_operators.png',
                                caption: '',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'dgEBnHrkXc',
                            type: 'header',
                            data: { text: 'Logical Operators:-', level: 2 }
                        },
                        {
                            id: 'CeifOn_XZY',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Logical operators are used to combine two or more conditions. JavaScript includes following logical operators.'
                            }
                        },
                        {
                            id: '2vlASRgeyR',
                            type: 'image',
                            data: {
                                url:
                                    'https://www.devopsschool.com/blog/wp-content/uploads/2020/07/JavaScript-Logical-Operator.png',
                                caption: '',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'z0vVebFfyf',
                            type: 'header',
                            data: { text: 'Assignment Operators', level: 2 }
                        },
                        {
                            id: 'LJvGelqZaq',
                            type: 'paragraph',
                            data: {
                                text:
                                    'JavaScript includes assignment operators to assign values to variables with less key strokes.'
                            }
                        },
                        {
                            id: 'ZFpnGE6NTN',
                            type: 'image',
                            data: {
                                url: 'https://i.ytimg.com/vi/zIQKbpmdKa4/maxresdefault.jpg',
                                caption: '',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'Ph3D1Qp53q',
                            type: 'header',
                            data: { text: 'Ternary Operator', level: 2 }
                        },
                        {
                            id: '1u67Kban3e',
                            type: 'paragraph',
                            data: {
                                text:
                                    'JavaScript includes special operator called ternary operator :? that assigns a value to a variable based on some condition.&nbsp;'
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'Chapter 4',
                description: 'Chapter 1 description: Introduction to HTML',
                content: {
                    time: 1626350207081,
                    blocks: [
                        {
                            id: 'ZgYlCu0A19',
                            type: 'header',
                            data: { text: 'Javascript Data Types', level: 1 }
                        },
                        {
                            id: '_m_6oTclse',
                            type: 'paragraph',
                            data: {
                                text:
                                    'JavaScript provides different&nbsp;<b>data types</b>&nbsp;to hold different types of values. There are two types of data types in JavaScript.'
                            }
                        },
                        {
                            id: 'ag-HTduWoY',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: [
                                    'Primitive data type',
                                    'Non-primitive (reference) data type'
                                ]
                            }
                        },
                        {
                            id: 'pUfRZhXFfj',
                            type: 'image',
                            data: {
                                url:
                                    'https://dotnettrickscloud.blob.core.windows.net/img/javascript/js-datatype.png',
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
                title: 'Chapter 5',
                description: 'Chapter 1 description: Introduction to HTML',
                content: {
                    time: 1626350583414,
                    blocks: [
                        {
                            id: 'ASRAE0iBOS',
                            type: 'header',
                            data: { text: 'JavaScript Functions', level: 1 }
                        },
                        {
                            id: '_LGtPCJSI0',
                            type: 'paragraph',
                            data: {
                                text:
                                    '<b>JavaScript functions</b>&nbsp;are used to perform operations.'
                            }
                        },
                        {
                            id: 'MZscEZSIrf',
                            type: 'header',
                            data: { text: 'Advantage of JavaScript function', level: 4 }
                        },
                        {
                            id: 'l_Wn9Tk7gx',
                            type: 'paragraph',
                            data: {
                                text: 'There are mainly two advantages of JavaScript functions.'
                            }
                        },
                        {
                            id: 'nknduaN6wW',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: [
                                    'Code reusability: We can call a function several times so it save coding.',
                                    'Less coding: It makes our program compact. We don’t need to write many lines of code each time to perform a common task.'
                                ]
                            }
                        },
                        {
                            id: 'v3aXLcIg2n',
                            type: 'code',
                            data: {
                                code:
                                    'function functionName([arg1, arg2, ...argN]){  \n //code to be executed  \n}  \n'
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'Chapter 6',
                description: 'Chapter 1 description: Introduction to HTML',
                content: {
                    time: 1626350788924,
                    blocks: [
                        {
                            id: 'VJbJWJxtlk',
                            type: 'header',
                            data: { text: 'What are Cookies ?', level: 2 }
                        },
                        {
                            id: '5LBASQ7WTm',
                            type: 'paragraph',
                            data: {
                                text:
                                    "Web Browsers and Servers use HTTP protocol to communicate and HTTP is a stateless protocol. But for a commercial website, it is required to maintain session information among different pages. For example, one user registration ends after completing many pages. But how to maintain users' session information across all the web pages."
                            }
                        },
                        {
                            id: 'w5zRgs0yMM',
                            type: 'header',
                            data: { text: 'How It Works ?', level: 2 }
                        },
                        {
                            id: '__8dlma7W_',
                            type: 'paragraph',
                            data: {
                                text:
                                    "Your server sends some data to the visitor's browser in the form of a cookie. The browser may accept the cookie. If it does, it is stored as a plain text record on the visitor's hard drive. Now, when the visitor arrives at another page on your site, the browser sends the same cookie to the server for retrieval. Once retrieved, your server knows/remembers what was stored earlier."
                            }
                        },
                        {
                            id: 'FfsgLOn4WH',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Cookies are a plain text data record of 5 variable-length fields −'
                            }
                        },
                        {
                            id: '4fuSuBX5EN',
                            type: 'list',
                            data: {
                                style: 'unordered',
                                items: [
                                    'Expires&nbsp;− The date the cookie will expire. If this is blank, the cookie will expire when the visitor quits the browser.',
                                    'Domain&nbsp;− The domain name of your site.',
                                    'Path&nbsp;− The path to the directory or web page that set the cookie. This may be blank if you want to retrieve the cookie from any directory or page.',
                                    'Secure&nbsp;− If this field contains the word "secure", then the cookie may only be retrieved with a secure server. If this field is blank, no such restriction exists.',
                                    'Name=Value&nbsp;− Cookies are set and retrieved in the form of key-value pairs.'
                                ]
                            }
                        },
                        {
                            id: 'k-6PJicEBR',
                            type: 'image',
                            data: {
                                url:
                                    'https://cdn.splessons.com/wp-content/uploads/2016/03/javascript-cookies-01-splessons.png',
                                caption: '',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            }
        ]
    },
    {
        id: 4,
        name: 'NODEJS',
        description: 'Basics of NODEJS',
        chapters: [
            {
                title: 'chapter 1',
                description: 'chapter 1 description: Introduction to NODEJS',
                content: {
                    time: 1626803253927,
                    blocks: [
                        {
                            id: '93mfkR1Uhr',
                            type: 'header',
                            data: { text: 'Introduction to Node.js', level: 2 }
                        },
                        {
                            id: 'gVetNPtXSw',
                            type: 'paragraph',
                            data: {
                                text:
                                    "Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36.&nbsp;"
                            }
                        },
                        {
                            id: 'ZTaQZ_R7-X',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Node.js is a platform built fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.'
                            }
                        },
                        {
                            id: 'GkIL4nF2jj',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.'
                            }
                        },
                        {
                            id: 'tUCXi4C_kW',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.'
                            }
                        },
                        {
                            id: 'aUClXjKKc1',
                            type: 'code',
                            data: { code: 'Node.js = Runtime Environment + JavaScript Library' }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'chapter 2',
                description: 'chapter 2 description: Features of NODEJS',
                content: {
                    time: 1626803888012,
                    blocks: [
                        {
                            id: 'DQF0IQaJ_z',
                            type: 'header',
                            data: { text: 'Features of Node.js', level: 2 }
                        },
                        {
                            id: 'tUDqOJN0cO',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Following are some of the important features that make Node.js the first choice of software architects.'
                            }
                        },
                        {
                            id: 'Q6b5p1JWop',
                            type: 'list',
                            data: {
                                style: 'unordered',
                                items: [
                                    'Asynchronous and Event Driven&nbsp;− All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.',
                                    "Very Fast&nbsp;− Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.",
                                    'Single Threaded but Highly Scalable&nbsp;− Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.',
                                    'No Buffering&nbsp;− Node.js applications never buffer any data. These applications simply output the data in chunks.',
                                    'License&nbsp;− Node.js is released under the&nbsp;MIT license.'
                                ]
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'chapter 3',
                description: 'chapter 3 description: concepts of NODEJS',
                content: {
                    time: 1626804481282,
                    blocks: [
                        { id: '8UxD71NUpb', type: 'header', data: { text: 'Concepts', level: 2 } },
                        {
                            id: 'zBAR-taXsx',
                            type: 'paragraph',
                            data: {
                                text:
                                    'The following diagram depicts some important parts of Node.js&nbsp;'
                            }
                        },
                        {
                            id: '0F2ru2v7SM',
                            type: 'image',
                            data: {
                                url:
                                    'https://www.tutorialspoint.com/nodejs/images/nodejs_concepts.jpg',
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
                title: 'chapter 4',
                description: 'chapter 4 description: example of NODEJS',
                content: {
                    time: 1626805057509,
                    blocks: [
                        {
                            id: 'oL5FY-A-uC',
                            type: 'header',
                            data: { text: 'Node.js console-based Example', level: 2 }
                        },
                        {
                            id: 'L5QrEPDduH',
                            type: 'paragraph',
                            data: { text: 'File: console_example1.js' }
                        },
                        {
                            id: 'Ge5sZw-DcB',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: ["console.log('Hello&nbsp;JavaTpoint');&nbsp;&nbsp;&nbsp;"]
                            }
                        },
                        {
                            id: 'yBBvkOWRq9',
                            type: 'paragraph',
                            data: {
                                text: 'Open Node.js command prompt and run the following code:'
                            }
                        },
                        {
                            id: '9rdoAncgFK',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: ['node&nbsp;console_example1.js&nbsp;&nbsp;']
                            }
                        },
                        {
                            id: 'AuR6BiQ1qA',
                            type: 'image',
                            data: {
                                url:
                                    'https://www.javatpoint.com/js/nodejs/images/nodejs-console-example1.jpg',
                                caption: '',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'P4zEHqkzeI',
                            type: 'paragraph',
                            data: {
                                text: 'Here, console.log() function displays message on console.'
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'chapter 5',
                description: 'chapter 5 description: example of NODEJS',
                content: {
                    time: 1626805504405,
                    blocks: [
                        {
                            id: 'grlIO9qoQQ',
                            type: 'header',
                            data: { text: 'Node.js web-based Example', level: 2 }
                        },
                        {
                            id: 'M_4iFVs-6W',
                            type: 'paragraph',
                            data: {
                                text:
                                    'A node.js web application contains the following three parts:'
                            }
                        },
                        {
                            id: '9B6_Lk1OA1',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: [
                                    'Import required modules:&nbsp;The "require" directive is used to load a Node.js module.',
                                    "Create server:&nbsp;You have to establish a server which will listen to client's request similar to Apache HTTP Server.",
                                    'Read request and return response:&nbsp;Server created in the second step will read HTTP request made by client which can be a browser or console and return the response.'
                                ]
                            }
                        },
                        {
                            id: 'ZTizaiCV8i',
                            type: 'paragraph',
                            data: { text: 'How to create node.js web applications' }
                        },
                        {
                            id: '1cZCI7OLXt',
                            type: 'paragraph',
                            data: { text: 'Follow these steps:' }
                        },
                        {
                            id: '-7Vr8Hx0WM',
                            type: 'list',
                            data: {
                                style: 'unordered',
                                items: [
                                    'Import required module:&nbsp;The first step is to use ?require? directive to load http module and store returned HTTP instance into http variable. For example:'
                                ]
                            }
                        },
                        {
                            id: 'uS1Ww1s3CH',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: ['var&nbsp;http&nbsp;=&nbsp;require("http");&nbsp;&nbsp;']
                            }
                        },
                        {
                            id: 'MwworwU7g8',
                            type: 'list',
                            data: {
                                style: 'unordered',
                                items: [
                                    'Create server:&nbsp;In the second step, you have to use created http instance and call http.createServer() method to create server instance and then bind it at port 8081 using listen method associated with server instance. Pass it a function with request and response parameters and write the sample implementation to return "Hello World". For example:'
                                ]
                            }
                        },
                        {
                            id: '8Zrku6X-DI',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: [
                                    'http.createServer(function&nbsp;(request,&nbsp;response)&nbsp;{&nbsp;&nbsp;',
                                    '&nbsp;&nbsp;&nbsp;//&nbsp;Send&nbsp;the&nbsp;HTTP&nbsp;header&nbsp;&nbsp;&nbsp;',
                                    '&nbsp;&nbsp;&nbsp;//&nbsp;HTTP&nbsp;Status:&nbsp;200&nbsp;:&nbsp;OK&nbsp;&nbsp;',
                                    '&nbsp;&nbsp;&nbsp;//&nbsp;Content&nbsp;Type:&nbsp;text/plain&nbsp;&nbsp;',
                                    "&nbsp;&nbsp;&nbsp;response.writeHead(200,&nbsp;{'Content-Type':&nbsp;'text/plain'});&nbsp;&nbsp;",
                                    '&nbsp;&nbsp;&nbsp;//&nbsp;Send&nbsp;the&nbsp;response&nbsp;body&nbsp;as&nbsp;"Hello&nbsp;World"&nbsp;&nbsp;',
                                    "&nbsp;&nbsp;&nbsp;response.end('Hello&nbsp;World\\n');&nbsp;&nbsp;",
                                    '}).listen(8081);&nbsp;&nbsp;',
                                    '//&nbsp;Console&nbsp;will&nbsp;print&nbsp;the&nbsp;message&nbsp;&nbsp;',
                                    "console.log('Server&nbsp;running&nbsp;at&nbsp;http://127.0.0.1:8081/');&nbsp;&nbsp;"
                                ]
                            }
                        },
                        {
                            id: 'J-uOc6xviN',
                            type: 'list',
                            data: {
                                style: 'unordered',
                                items: [
                                    'Combine step1 and step2 together&nbsp;in a file named "main.js".'
                                ]
                            }
                        },
                        { id: 'qnljv2Gh9t', type: 'paragraph', data: { text: 'File: main.js' } },
                        {
                            id: '0n953WeeS5',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: [
                                    'var&nbsp;http&nbsp;=&nbsp;require("http");&nbsp;&nbsp;',
                                    'http.createServer(function&nbsp;(request,&nbsp;response)&nbsp;{&nbsp;&nbsp;',
                                    '&nbsp;//&nbsp;Send&nbsp;the&nbsp;HTTP&nbsp;header&nbsp;&nbsp;&nbsp;',
                                    '&nbsp;&nbsp;&nbsp;//&nbsp;HTTP&nbsp;Status:&nbsp;200&nbsp;:&nbsp;OK&nbsp;&nbsp;',
                                    '&nbsp;&nbsp;&nbsp;//&nbsp;Content&nbsp;Type:&nbsp;text/plain&nbsp;&nbsp;',
                                    "&nbsp;&nbsp;&nbsp;response.writeHead(200,&nbsp;{'Content-Type':&nbsp;'text/plain'});&nbsp;&nbsp;",
                                    '&nbsp;&nbsp;&nbsp;//&nbsp;Send&nbsp;the&nbsp;response&nbsp;body&nbsp;as&nbsp;"Hello&nbsp;World"&nbsp;&nbsp;',
                                    "&nbsp;&nbsp;&nbsp;response.end('Hello&nbsp;World\\n');&nbsp;&nbsp;",
                                    '}).listen(8081);&nbsp;&nbsp;'
                                ]
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            },
            {
                title: 'chapter 6',
                description: 'chapter 6 description:example of NODEJS',
                content: {
                    time: 1626805941245,
                    blocks: [
                        {
                            id: '5iY-fjnLZ3',
                            type: 'header',
                            data: { text: 'Node.js Package Manager', level: 1 }
                        },
                        {
                            id: 'mZtaz3-ZKL',
                            type: 'paragraph',
                            data: {
                                text: 'Node Package Manager provides two main functionalities:'
                            }
                        },
                        {
                            id: 'jmaRKXEf7c',
                            type: 'list',
                            data: {
                                style: 'unordered',
                                items: [
                                    'It provides online repositories for node.js packages/modules which are searchable on search.nodejs.org',
                                    'It also provides command line utility to install Node.js packages, do version management and dependency management of Node.js packages.'
                                ]
                            }
                        },
                        {
                            id: '84_zMqrxgk',
                            type: 'paragraph',
                            data: {
                                text:
                                    'The npm comes bundled with Node.js installables in versions after that v0.6.3. You can check the version by opening Node.js command prompt and typing the following command:'
                            }
                        },
                        {
                            id: 'nzvHeie8ST',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: ['npm&nbsp;&nbsp;version&nbsp;&nbsp;']
                            }
                        },
                        {
                            id: 'ALjFcsVBIJ',
                            type: 'image',
                            data: {
                                url: 'https://www.javatpoint.com/js/nodejs/images/npm1.png',
                                caption: '',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        },
                        {
                            id: 'c7O1xgi6s3',
                            type: 'header',
                            data: { text: 'Installing Modules using npm', level: 2 }
                        },
                        {
                            id: 'kr2GSuiHX2',
                            type: 'paragraph',
                            data: { text: 'Following is the syntax to install any Node.js module:' }
                        },
                        {
                            id: 'i8ozkMVL37',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: [
                                    'npm&nbsp;install&nbsp;&lt;Module&nbsp;Name&gt;&nbsp;&nbsp;'
                                ]
                            }
                        },
                        {
                            id: 'LVdQH9RszI',
                            type: 'paragraph',
                            data: {
                                text: "Let's install a famous Node.js web framework called express:"
                            }
                        },
                        { id: '_h5CgIRU1D', type: 'paragraph', data: { text: 'C++ vs Java' } },
                        {
                            id: 'PxKmQoR9bN',
                            type: 'paragraph',
                            data: {
                                text:
                                    'Open the Node.js command prompt and execute the following command:'
                            }
                        },
                        {
                            id: '3unpnORAqm',
                            type: 'list',
                            data: {
                                style: 'ordered',
                                items: ['npm&nbsp;install&nbsp;express&nbsp;&nbsp;']
                            }
                        },
                        {
                            id: '9-YJGgQiGj',
                            type: 'paragraph',
                            data: {
                                text:
                                    'You can see the result after installing the "express" framework.'
                            }
                        },
                        {
                            id: 'sdSqRxBass',
                            type: 'image',
                            data: {
                                url: 'https://www.javatpoint.com/js/nodejs/images/npm2.png',
                                caption: '',
                                withBorder: false,
                                withBackground: false,
                                stretched: false
                            }
                        }
                    ],
                    version: '2.22.1'
                }
            }
        ]
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
