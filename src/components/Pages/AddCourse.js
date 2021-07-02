import React from 'react';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import InlineCode from '@editorjs/inline-code';
import Code from '@editorjs/code';
import EditorJS from '@editorjs/editorjs';
import SimpleImage from '@editorjs/simple-image';
window.onerror = (error) => {
    console.log('error', error);
    return true;
};

export default function AddCourse() {
    let editor;
    let previewEditor;
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
            editor.caret.focus(true);

            previewEditor = new EditorJS({
                holder: 'preview',
                tools: {
                    header: Header,
                    list: List,
                    inlineCode: InlineCode,
                    image: SimpleImage,
                    code: Code
                }
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
                previewEditor.render(outputData);
            })
            .catch((error) => {
                console.log('Saving failed: ', error);
            });
    };

    return (
        <div style={{ paddingLeft: '20px' }}>
            <h1>Hello Editor!</h1>
            <button onClick={save}>Save</button>
            <div id="editorjs">
                Start adding a course and click on save and see the content in preview mode below
            </div>
            <hr />
            <div id="preview">Preview </div>
        </div>
    );
}
