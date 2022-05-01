import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './assets/css/index.scss';

import { Editor } from './code-editor/Editor';

function App() {
    return (
        <Router>
            <div
                width="100%"
                height="100%"
                flexGrow="1"
                overflow="auto"
                className="main-container">
                <Switch>
                    <Route exact path="/">
                        <Editor />
                    </Route>
                    {/* <Route path="*">
                        <NotFound />
                    </Route> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
