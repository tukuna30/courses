import './App.css';
import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BrandingBar from './components/BrandingBar';
import Login from './components/Pages/Login';
import CourseDetail from './components/Pages/CourseDetail';
import AddCourse from './components/Pages/AddCourse';
import EditCourse from './components/Pages/EditCourse';
import Courses from './components/Pages/Courses';
import NotFound from './components/NotFound';
import './assets/css/index.scss';
import theme from './theme';

const useStyles = makeStyles(() => ({
    footer: {
        justifyContent: 'center'
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
    }
}));

function App() {
    const classes = useStyles();
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { lastLogIn: undefined };

    console.log('currentUser', currentUser);
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
                                <Login setUserLoggedIn={setIsUserLoggedIn} />
                            </Route>
                            <Route exact path="/login">
                                <Login setUserLoggedIn={setIsUserLoggedIn} />
                            </Route>
                            <Route path="/courses">
                                <Courses currentUser={currentUser} />
                            </Route>
                            <Route path="/addCourse">
                                <AddCourse />
                            </Route>
                            <Route path="/edit/:id">
                                <EditCourse />
                            </Route>
                            <Route path="/details/:id">
                                <CourseDetail />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </Box>
                    <Grid container className={classes.footer}>
                        <div>Learn Without Limits</div>
                    </Grid>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
