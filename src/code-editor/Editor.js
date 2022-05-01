import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import './Editor.scss';
import React, { useState } from 'react';
export const Editor = () => {
    const defaultQuestion = {
        title: "Add two numbers",
        description: "Add two numbers and return the value",
        defaultCode: "console.log('Hello World');",
        inputs: [1, 2],
        expectedResult: 3
    };
    const [problem, setProblem] = useState({ ...defaultQuestion });

    const runCode = () => {
        const data = {
            code: problem.code ?? problem.defaultCode,
            inputs: [1, 2, 3]
        }

        document.getElementById('frame').contentWindow.postMessage(data, document.URL);
    };

    return (
        <div>
            <div className="problem">
                <h2>{problem.title}</h2>
                <span>{problem.description}</span>
            </div>
            <CodeMirror
                value={problem.code ?? problem.defaultCode}
                height="200px"
                width="600px"
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    console.log('value:', value, viewUpdate);
                    setProblem({ ...problem, code: value });
                }}
            />

            <div className="action-row">
                <button onClick={runCode}>Run</button>
                <button disabled>Submit</button>
            </div>
            <iframe id="frame" key={'result-evaluator'} className="iframe" src={"/result.html"} />
        </div>
    );
};
