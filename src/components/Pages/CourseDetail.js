/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { getScore } from '../../uiHelper';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

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
    }
}));

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

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    useEffect(async () => {
        try {
            setIsLoading(true);
            const rawRsponse = await fetch(`http://localhost:5001/course/${id}`, {
                method: 'GET',
                credentials: 'include'
            });

            if (!rawRsponse.ok) {
                if (rawRsponse.status === 401);
                setError('You need to login!');
                setTimeout(() => {
                    localStorage.removeItem('isUserLoggedIn');
                    history.push('/login');
                }, 1500);

                return;
            }
            const jsonResponse = await rawRsponse.json();
            console.log('course', jsonResponse.course);
            setCourse(jsonResponse.course);
            setIsLoading(false);
            // {name: '', questions: [{title: , options: ['strings']}]}
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    }, []);

    const handleClose = () => {
        setIsToastOpen(false);
    };

    const renderTabs = (chapters) => {
        return chapters.map((chapter, index) => {
            return <Tab label={chapter.title} {...a11yProps(index)} />;
        });
    };

    const renderTabPanels = (chapters) => {
        return chapters.map((chapter, index) => {
            return (
                <TabPanel value={tabValue} index={index}>
                    <div>{chapter.description}</div>

                    <div>Topics:- </div>
                    {chapter.topics.map((topic, index) => {
                        return (
                            <div key={index}>
                                <div>{topic.title}</div>
                                <div>{topic.topicDescription}</div>
                            </div>
                        );
                    })}
                </TabPanel>
            );
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
                        justify="center"
                        alignItems="flex-start"
                        wrap="nowrap">
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={tabValue}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}>
                            {renderTabs(course.chapters)}
                        </Tabs>
                        <div>{renderTabPanels(course.chapters)}</div>
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
