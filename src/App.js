import './App.css';
import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import theme from './theme';
import BrandingBar from './components/BrandingBar';
import Login from './components/Login';
import Questions from './components/Questions';

const useStyles = makeStyles(() => ({
    footer: {
        justifyContent: 'center'
    }
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Box width="100%" height="100vh" display="flex" flexDirection="column">
                <BrandingBar />
                <Box width="100%" height="100%" flexGrow="1" overflow="auto">
                    <Container maxWidth="xl" />
                    <div>
                        <Login />
                        <Questions />
                    </div>
                </Box>
                <Grid container className={classes.footer}>
                    <div>Quizone Test your skills via a quiz</div>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default App;
