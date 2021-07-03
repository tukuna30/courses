import React from 'react';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import InlineCode from '@editorjs/inline-code';
import Code from '@editorjs/code';
import EditorJS from '@editorjs/editorjs';
import SimpleImage from '@editorjs/simple-image';
//import Embed from '@editorjs/embed';
/* import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import Warning from '@editorjs/warning';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Quote from '@editorjs/quote';
import CheckList from '@editorjs/checklist';
 */

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
                    code: Code,
                    /* // embed: Embed,
                     table: Table,
                    paragraph: Paragraph,
                    warning: Warning,
                   linkTool: LinkTool,
                   image: Image,
                   raw: Raw,
                  quote: Quote,
                  checklist: CheckList,
                 simpleImage: SimpleImage
 */





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
