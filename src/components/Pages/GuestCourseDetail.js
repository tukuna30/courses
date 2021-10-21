/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import InlineCode from '@editorjs/inline-code';
import Code from '@editorjs/code';
import EditorJS from '@editorjs/editorjs';
import SimpleImage from '@editorjs/simple-image';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { getApiBaseUrl } from '../../uiHelper';
import GuestQuizDetail from './GuestQuizDetail';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../../assets/css/Details.css';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: '200px'
    },
    content: {
        color: 'red',
        fontSize: '20px'
    },
    editor: {
        maxHeight: '500px',
        overflowY: 'auto',
        padding: '0 20px'
    }
}));

let editor;
const CourseDetail = () => {
    const classes = useStyles();

    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState('');
    const [course, setCourse] = useState({ chapters: [] });
    const [toastMessage, setToastMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [questionAnswers, setQuestionValues] = useState({});
    const [isToastOpen, setIsToastOpen] = useState(false);
    const [unAnswered, setUnAnsweredQuestions] = useState([]);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    let [alertType, setAlertType] = useState('error');
    const [tabValue, setTabValue] = React.useState(0);
    const [showQuiz, setShowQuiz] = React.useState(false);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
        if (newValue == course.chapters.length) {
            setShowQuiz(true);
        } else {
            setShowQuiz(false);
        }
        try {
            editor.render(course.chapters[newValue].content);
        } catch (e) {
            console.log('err while feeding data to editor', e);
        }
    };

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    useEffect(async () => {
        try {
            setIsLoading(true);
            const rawRsponse = await fetch(`${getApiBaseUrl()}guest_courses/${id}`, {
                method: 'GET',
                credentials: 'include'
            });

            const jsonResponse = await rawRsponse.json();
            console.log('course', jsonResponse.course);
            setCourse(jsonResponse.course);
            setIsLoading(false);
            setTimeout(() => {
                jsonResponse.course.chapters[0] &&
                    editor.render(jsonResponse.course.chapters[0].content);
            }, 1000);
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }

        editor = new EditorJS({
            holder: 'editor',
            readOnly: true,
            tools: {
                header: Header,
                list: List,
                inlineCode: InlineCode,
                image: SimpleImage,
                code: Code
            }
        });

        editor.isReady
            .then(() => {
                // editor.render();
            })
            .catch((reason) => {
                console.log(`Editor.js initialization failed because of ${reason}`);
            });
    }, []);

    const handleClose = () => {
        setIsToastOpen(false);
    };

    const renderTabs = (chapters, isQuiz) => {
        return chapters.map((chapter, index) => {
            return <Tab label={chapter.title || `Chapter ${index + 1}`} {...a11yProps(index)} />;
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            {isLoading && <div>Loading specific course...</div>}
            {!isLoading && (
                <div>
                    <h1>{course.name}</h1>
                    <h2>{course.description}</h2>

                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        style={{ flexWrap: 'nowrap' }}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={tabValue}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}>
                            {renderTabs(course.chapters, course.quiz_id)}
                            {course.quiz_id && (
                                <Tab
                                    label="Ready for a Quiz"
                                    {...a11yProps(course.chapters.length)}
                                />
                            )}
                        </Tabs>
                        <div
                            id="editor"
                            style={{ display: showQuiz ? 'none' : 'block' }}
                            className={classes.editor}></div>
                        {showQuiz && <GuestQuizDetail id={course.quiz_id} />}
                        {/* <div>{renderTabPanels(course.chapters)}</div> */}
                    </Grid>
                </div>
            )}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={12000}
                open={isToastOpen}
                onClose={handleClose}
                key={'success toast'}>
                <Alert onClose={handleClose} severity={alertType}>
                    {toastMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default CourseDetail;
