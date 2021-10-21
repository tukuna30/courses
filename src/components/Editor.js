import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import './Editor.scss';
import React from 'react';
import { SettingsOverscanOutlined } from '@material-ui/icons';

export const Editor = () => {
    const frame = React.useRef(null);
    const [iframeContent, setIframeContent] = React.useState('');

    const updateOutput = (value) => {
        // setting up the iframe

        if (frame.current) {
            var win = frame.current.contentWindow;
            var doc = win.document;
            doc.open();
            doc.close(); // must open and close document object to start using it!

            var s = doc.createElement('script');
            s.type = 'text/javascript';

            const consoleScript = `
            console.olog = console.log;
            console.log = function(message) {
                //console.olog(message);
                var element = document.createElement("div");
                let textNode = document.createTextNode(message);
                element.appendChild(textNode)
                document.body.appendChild(element);
            };
            console.error = console.debug = console.info = console.log;`;

            try {
                const lib = doc.createElement('script');
                lib.type = 'text/javascript';

                lib.appendChild(doc.createTextNode(consoleScript));

                s.appendChild(doc.createTextNode(value));
                doc.head.appendChild(lib);
                doc.body.appendChild(s);
            } catch (e) {
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
                value="console.log('hello world!');"
                height="200px"
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    console.log('value:', value, viewUpdate);
                    //updateOutput(value);
                    setIframeContent(value);
                }}
            />

            <button onClick={() => updateOutput(iframeContent)}>Run code</button>

            <iframe className="iframe" ref={frame} />
        </div>
    );
};
