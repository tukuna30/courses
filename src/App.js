import './App.css';
import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BrandingBar from './components/BrandingBar';
import Login from './components/Pages/Login';
import CourseDetail from './components/Pages/CourseDetail';
import GuestCourseDetail from './components/Pages/GuestCourseDetail';
import AddCourse from './components/Pages/AddCourse';
import EditCourse from './components/Pages/EditCourse';
import Courses from './components/Pages/Courses';
import GuestCourses from './components/Pages/GuestCourseList';
import NotFound from './components/NotFound';
import './assets/css/index.scss';
import theme from './theme';
import Quizes from './components/Pages/QuizesList';
import AddQuiz from './components/Pages/AddQuiz';
import QuizDetail from './components/Pages/QuizDetail';
import EditQuiz from './components/Pages/EditQuiz';
import Modal from './components/Modal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';
import CookiePolicy from './components/CookiePolicy';
import { Editor } from './components/Editor';

const useStyles = makeStyles(() => ({
    footer: {
        justifyContent: 'center',
        '& span': {
            marginRight: '10px',
            '& a': {
                color: '#212e53 !important'
            }
        },
        paddingBottom: '10px',

        '&.cookie-notice': {
            padding: '10px',
            background: '#D1DAD3'
        }
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
    }
}));

const isTermsOpen = window.location.href.indexOf('terms') !== -1;
const isPrivacyOpen = window.location.href.indexOf('privacy') !== -1;
const isContactOpen = window.location.href.indexOf('contact') !== -1;
const isCookieOpen = window.location.href.indexOf('cookie') !== -1;

function checkLearnSmeraCookieExists() {
    return document.cookie.split(';').some((item) => item.trim().startsWith('learnSmeraCookie='));
}

function App() {
    const classes = useStyles();
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { lastLogIn: undefined };
    const [showPrivacyDialog, setShowPrivacyDialog] = React.useState(isPrivacyOpen);
    const [showTermsDialog, setShowTermsDialog] = React.useState(isTermsOpen);
    const [showCookieDialog, setShowCookieDialog] = React.useState(isCookieOpen);
    const [showContactDialog, setShowContactDialog] = React.useState(isContactOpen);
    const [isLearnSmeraCookieAccpeted, setLearnSmeraCookieAccpeted] = React.useState(
        checkLearnSmeraCookieExists()
    );

    console.log('currentUser', currentUser);

    const handleDialogClose = () => {
        setShowPrivacyDialog(false);
    };
    const handleTermsDialogClose = () => {
        setShowTermsDialog(false);
    };

    const acceptCookies = () => {
        document.cookie = 'learnSmeraCookie=true;';
        setLearnSmeraCookieAccpeted(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Box width="100%" height="100vh" display="flex" flexDirection="column">
                    <BrandingBar
                        showProfileMenu={isUserLoggedIn ? true : false}
                        currentUser={currentUser}
                        setUserLoggedIn={setIsUserLoggedIn}
                    />
                    <Box
                        width="100%"
                        height="100%"
                        flexGrow="1"
                        overflow="auto"
                        className={classes.mainContainer}>
                        <Switch>
                            <Route exact path="/">
                                <Login
                                    setUserLoggedIn={setIsUserLoggedIn}
                                    termsClick={setShowTermsDialog}
                                    privacyClick={setShowPrivacyDialog}
                                />
                            </Route>
                            <Route exact path="/login">
                                <Login
                                    setUserLoggedIn={setIsUserLoggedIn}
                                    termsClick={setShowTermsDialog}
                                    privacyClick={setShowPrivacyDialog}
                                />
                            </Route>
                            <Route path="/addCourse">
                                <AddCourse />
                            </Route>
                            <Route path="/courses_edit/:id">
                                <EditCourse />
                            </Route>
                            <Route path="/course_details/:id">
                                <CourseDetail />
                            </Route>
                            <Route path="/guest_course_details/:id">
                                <GuestCourseDetail />
                            </Route>
                            <Route path="/courses">
                                <Courses currentUser={currentUser} />
                            </Route>
                            <Route path="/guest_courses">
                                <GuestCourses />
                            </Route>
                            <Route path="/AddQuiz">
                                <AddQuiz />
                            </Route>
                            <Route path="/quizes">
                                <Quizes />
                            </Route>
                            <Route path="/quiz_details/:id">
                                <QuizDetail />
                            </Route>
                            <Route path="/quiz_edit/:id">
                                <EditQuiz />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </Box>
                    <Grid container className={classes.footer}>
                        <span className="copyright">Smera &copy; 2021</span>
                        <span>Learn and grow</span>
                    </Grid>
                    {isLearnSmeraCookieAccpeted ? (
                        <Grid container className={classes.footer}>
                            <span>
                                <a
                                    href="#terms"
                                    onClick={() => {
                                        setShowTermsDialog(true);
                                    }}>
                                    Terms of Service
                                </a>
                            </span>
                            <span>
                                <a
                                    href="#privacy"
                                    onClick={() => {
                                        setShowPrivacyDialog(true);
                                    }}>
                                    Privacy Policy
                                </a>
                            </span>
                        </Grid>
                    ) : (
                        <Grid container className={`${classes.footer} cookie-notice`}>
                            <span>
                                Notice:- learn.smera.io uses cookies to provide necessary website
                                functionality, improve your experience and analyze our traffic.
                                <br />
                                By using our website, you agree to our{' '}
                                <a
                                    href="#privacy"
                                    onClick={() => {
                                        setShowPrivacyDialog(true);
                                    }}>
                                    Privacy policy,
                                </a>{' '}
                                <a
                                    href="#terms"
                                    onClick={() => {
                                        setShowTermsDialog(true);
                                    }}>
                                    Terms of Service
                                </a>{' '}
                                and our{' '}
                                <a
                                    href="#cookie"
                                    onClick={() => {
                                        setShowCookieDialog(true);
                                    }}>
                                    Cookie policy
                                </a>
                                <Button
                                    style={{ background: '#eaab7c', borderRadius: '5px' }}
                                    onClick={() => acceptCookies()}>
                                    {' '}
                                    Ok
                                </Button>
                            </span>
                        </Grid>
                    )}
                    <Modal
                        showModal={showPrivacyDialog}
                        content={<PrivacyPolicy />}
                        cancelHandler={handleDialogClose}
                        title="Privacy Policy"></Modal>
                    <Modal
                        showModal={showTermsDialog}
                        content={<TermsOfService />}
                        cancelHandler={handleTermsDialogClose}
                        title="Terms of Service"></Modal>
                    <Modal
                        showModal={showCookieDialog}
                        content={<CookiePolicy />}
                        cancelHandler={() => setShowCookieDialog(false)}
                        title="Cookie Policy"></Modal>
                    <Modal
                        showModal={showContactDialog}
                        content={<Contact />}
                        cancelHandler={() => setShowContactDialog(false)}
                        title="Contact Us"></Modal>
                </Box>
                {/* <Editor /> */}
            </Router>
        </ThemeProvider>
    );
}

export default App;
