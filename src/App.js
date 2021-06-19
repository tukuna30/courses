import './App.css';
import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import BrandingBar from './components/BrandingBar';
import Login from './components/Pages/Login';
import Questions from './components/Pages/Questions';
import Details from './components/Pages/Details';

import theme from './theme';

const useStyles = makeStyles(() => ({
    footer: {
        justifyContent: 'center'
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Box width="100%" height="100vh" display="flex" flexDirection="column">
                    <BrandingBar />
                    <Box
                        width="100%"
                        height="100%"
                        flexGrow="1"
                        overflow="auto"
                        className={classes.mainContainer}>
                        <Container maxWidth="xl" />
                        <div>
                            <Switch>
                                <Route exact path="/">
                                    <Login />
                                </Route>
                                <Route exact path="/login">
                                    <Login />
                                </Route>
                                <Route path="/questions">
                                    <Questions />
                                </Route>
                                <Route path="/details/:id">
                                    <Details />
                                </Route>
                            </Switch>
                        </div>
                    </Box>
                    <Grid container className={classes.footer}>
                        <div>Quizone Test your skills via a quiz</div>
                    </Grid>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
