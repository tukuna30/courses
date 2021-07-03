import React from 'react';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import InlineCode from '@editorjs/inline-code';
import Code from '@editorjs/code';
import EditorJS from '@editorjs/editorjs';
import SimpleImage from '@editorjs/simple-image';
import Grid from '@material-ui/core/Grid';
window.onerror = (error) => {
    console.log('error', error);
    return true;
};

let editor;
let previewEditor;
export default function AddCourse() {
    const [editorContent, setEditorContent] = React.useState('');
    React.useEffect(() => {
        try {
            editor = new EditorJS({
                holder: 'editorjs',
                tools: {
                    header: Header,
                    list: List,
                    inlineCode: InlineCode,
                    image: SimpleImage,
                    code: Code
                }
            });
            editor.isReady.then(() => {
                editor.caret.focus(true);
            });
        } catch (er) {
            console.log(er);
        }
    }, []);
    const save = () => {
        editor
            .save()
            .then((outputData) => {
                console.log('Article data: ', outputData);
                setEditorContent(JSON.stringify(outputData));
            })
            .catch((error) => {
                console.log('Saving failed: ', error);
            });
    };

    const textAreaRef = React.useRef();

    const copyToClipBoard = () => {
        textAreaRef.current.select();
        document.execCommand('copy');
    };

    return (
        <Grid container spacing={3} direction="row" style={{ padding: '20px' }}>
            <Grid item xs={6}>
                <h1>Write an article!</h1>
                <button onClick={save}>Save</button>

                <div id="editorjs">
                    Start writing and click on save and see the content in preview mode
                </div>
            </Grid>
            <Grid item xs={6}>
                <h1>Copy the article content after saving!</h1>
                <textarea value={editorContent} ref={textAreaRef} />
                <button onClick={copyToClipBoard}>Copy </button>
            </Grid>
        </Grid>
    );
}
