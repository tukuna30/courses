import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import './Editor.scss';
import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
export const Editor = () => {
    const frame = React.useRef(null);
    const [iframeContent, setIframeContent] = React.useState("console.log('hello world!');");
    const [error, setError] = React.useState('');
    const [testId, setTestId] = React.useState(Date.now());
    const updateOutput = (value) => {
        // setting up the iframe
        if (frame.current) {
            var win = frame.current.contentWindow;
            win.location.reload(); //refresh iframe window

            var doc = win.document;
            doc.open();
            console.clear();
            doc.close(); // must open and close document object to start using it!

            var s = doc.createElement('script');
            s.type = 'text/javascript';

            const consoleScript = `
            console.log = function(...params) {
                var divElement = document.createElement("div");
                params.forEach((param) => {
                    var element = document.createElement("span");
                    let textNode = document.createTextNode(param + "  ");
                    element.appendChild(textNode);
                    divElement.appendChild(element);
                    //document.body.appendChild(element);
                });
                document.body.appendChild(divElement);
            };
            console.error = console.debug = console.info = console.log;`;

            try {
                //handle errors
                win.onerror = function (error) {
                    console.log('error', error);
                    setError(error);
                };

                // overide console
                const lib = doc.createElement('script');
                lib.type = 'text/javascript';
                lib.appendChild(doc.createTextNode(consoleScript));

                //run javascript
                s.appendChild(doc.createTextNode(value));
                doc.head.appendChild(lib);
                doc.body.appendChild(s);
            } catch (e) {
                console.log('error', e);
                lib.text = consoleScript;
                s.text = code;
                doc.head.appendChild(lib);

                doc.body.appendChild(s);
            }
            // doc.body.appendChild('<script>' + value + '</script>');
        }
    };
    return (
        <div>
            <CodeMirror
                value={iframeContent}
                height="200px"
                width="600px"
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    //console.log('value:', value, viewUpdate);
                    //updateOutput(value);
                    setIframeContent(value);
                }}
            />

            <button
                className="p-10 m-10 btn"
                onClick={() => {
                    setTestId(Date.now());
                    // //setError('');
                    setTimeout(() => {
                        //setTestId(Date.now());
                        updateOutput(iframeContent);
                    }, 500);
                }}>
                <PlayCircleOutlineIcon />
                <span>Run code</span>
            </button>
            {error && (
                <div>
                    <span style={{ color: 'red' }}>{error}</span>
                    <button
                        className="p-10 m-10 btn"
                        onClick={() => {
                            setError('');
                            setTestId(Date.now());
                        }}>
                        Clear
                    </button>
                </div>
            )}
            <iframe key={testId} className="iframe" ref={frame} />
        </div>
    );
};
