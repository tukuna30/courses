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
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/quizone.png';
import '../assets/css/index.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

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
        minHeight: '60px',
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

const BrandingBar = ({ showProfileMenu, currentUser, setUserLoggedIn }) => {
    // const { navStore } = useStores();
    const history = useHistory();
    const { t } = useTranslation();

    const isSessionActive = Date.now() - currentUser.lastLogIn <= 60 * 1000 * 60 * 24;
    setUserLoggedIn(isSessionActive);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [languageAnchor, setLanguageAnchor] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openLanguageMenu = (event) => {
        setLanguageAnchor(event.currentTarget);
    };

    const closeLanguageMenu = (event) => {
        setLanguageAnchor(null);
    };

    React.useEffect(() => {
        if (window.gapi) {
            window.gapi.load('auth2', function () {
                window.gapi.auth2.init();
            });
        }
    });

    const logout = async () => {
        if (window.gapi.auth2) {
            const auth2 = window.gapi.auth2.getAuthInstance();
            await auth2.signOut();
            console.log('user forced to log out of google');
        }

        const rawResponse = await fetch(`http://localhost:5001/logout`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        if (rawResponse.ok) {
            localStorage.removeItem('isUserLoggedIn');
            localStorage.removeItem('currentUser');
            console.log('destroyed session in server');
            setUserLoggedIn(false);
            history.push('/login');
        }

        handleClose();
    };

    const navigateToHome = () => {
        history.push('/');
    };

    const changeLanguageTo = (language) => {
        return i18next.changeLanguage(language, (err, t) => {
            if (err) return console.log('something went wrong loading', err);
        });
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
                    <Button onClick={openLanguageMenu}>{t('language')}</Button>

                    {showProfileMenu && (
                        <>
                            <Link to={'/addQuiz'} style={{ margin: '20px 20px 0', color: 'white' }}>
                                <span>Add a Quiz</span>
                            </Link>
                        </>
                    )}
                    <IconButton aria-label="help" color="inherit">
                        <Help />
                    </IconButton>
                    {showProfileMenu ? (
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="menuId"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleMenu}>
                            {currentUser.imageUrl ? (
                                <img className="profile-image" src={currentUser.imageUrl} />
                            ) : (
                                <AccountCircle />
                            )}
                        </IconButton>
                    ) : null}
                    <Menu
                        id="language-change"
                        anchorEl={languageAnchor}
                        keepMounted
                        open={Boolean(languageAnchor)}
                        onClose={closeLanguageMenu}>
                        <MenuItem
                            onClick={() => {
                                changeLanguageTo('or_IN').then(() => {
                                    closeLanguageMenu();
                                });
                            }}>
                            {t('odia')}
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                changeLanguageTo('en').then(() => {
                                    closeLanguageMenu();
                                });
                            }}>
                            {t('english')}
                        </MenuItem>
                    </Menu>
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
                        <MenuItem onClick={logout}>Log out</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default BrandingBar;
