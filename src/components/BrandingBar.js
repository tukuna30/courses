/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Help from '@material-ui/icons/Help';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Box } from '@material-ui/core';
// import { NavLink } from 'react-router-dom';
import logo from '../assets/images/quizone.png';
// import { useStores } from '../stores/index';

const useStyles = makeStyles((theme) => ({
    logo: {
        width: '20px',
        borderRadius: '5px'
    },
    appBar: {
        width: '100%',
        backgroundColor: 'green',
        color: 'white',
        top: 0,
        '& img': {
            cursor: 'pointer'
        }
    },
    title: {
        position: 'relative',
        top: '8px',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    navDefaultFont: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: '26.24px',
        letterSpacing: '0.4px'
    },
    toolBar: {
        minHeight: '45px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    organisationStyle: {
        textDecoration: 'none',
        color: 'white'
    },
    navLink: {
        textDecoration: 'none'
    }
}));

const Navbar = ({ hideProfileMenu }) => {
    // const { navStore } = useStores();

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    /*const logout = () => {
        console.log('logout button clicked');
        handleClose();
    };*/

    const logout = () => {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
              console.log('User signed out.');
            });
          
        console.log('logout button clicked');
        handleClose();
    };


    const navigateToHome = () => {
        window.location.href = window.location.origin;
    };

    return (
        <AppBar position="static" className={`${classes.appBar} ${classes.grow}`} elevation={0}>
            <Toolbar className={classes.toolBar}>
                <Typography className={classes.title} variant="h6" noWrap>
                    <span
                        onClick={navigateToHome}
                        onKeyPress={navigateToHome}
                        role="link"
                        tabIndex={0}>
                        <img src={logo} className={classes.logo} alt="applozic logo" />
                    </span>
                </Typography>
                <div className={classes.sectionDesktop}>
                    <IconButton aria-label="help" color="inherit">
                        <Help />
                    </IconButton>
                    {!hideProfileMenu ? (
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="menuId"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleMenu}>
                            <AccountCircle />
                        </IconButton>
                    ) : null}
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls="mobileMenuId"
                        aria-haspopup="true"
                        color="inherit">
                        <MoreIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={open}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>
                            {/* <NavLink
                                to="/profile"
                                onClick={navStore.hideAppNavBar}
                                className={classes.navLink}>
                                My Profile
                            </NavLink> */}
                        </MenuItem>
                        {/* <MenuItem onClick={handleClose}>
                            <NavLink to="/signup" onClick={navStore.hideAppNavBar}>
                                Sign up
                            </NavLink>
                        </MenuItem> */}
                        <MenuItem onClick={logout}>Log out</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
