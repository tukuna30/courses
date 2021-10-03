import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/css/login.css';
import { useTranslation } from 'react-i18next';

let googleSignInbuttonClicked = false;
const Login = ({ setUserLoggedIn }) => {
    const history = useHistory();
    const { t } = useTranslation();

    React.useEffect(() => {
        console.log('rendering login...');
        window.gapi.signin2.render('google-login', {
            scope: 'profile email',
            width: 240,
            height: 50,
            longtitle: true,
            theme: 'light',
            onsuccess: window.onSignIn,
            onfailure: (error) => {
                console.log('Login with gmail failed', error);
            }
        });

        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {
            lastLogIn: undefined
        };
        const isSessionActive = Date.now() - currentUser.lastLogIn <= 60 * 1000 * 60 * 24;
        console.log('User session active', isSessionActive);
        setUserLoggedIn(isSessionActive);
    }, []);

    window.onSignIn = async function data(googleUser) {
        if (googleSignInbuttonClicked === false) {
            return;
        }
        console.log('google login success');
        const profile = googleUser.getBasicProfile();
        console.log(`ID: ${profile.getId()}`); // Do not send to your backend! Use an ID token instead.
        console.log(`Name: ${profile.getName()}`);
        console.log(`Image URL: ${profile.getImageUrl()}`);
        console.log(`Email: ${profile.getEmail()}`);

        const user = {
            email: profile.getEmail(),
            thirdPartyLogin: 'Gmail',
            imageUrl: profile.getImageUrl(),
            name: profile.getName()
        };

        const rawResponse = await fetch(`http://localhost:5001/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (rawResponse.ok) {
            localStorage.setItem('currentUser', JSON.stringify({ ...user, lastLogIn: Date.now() }));
            setUserLoggedIn(true);
            history.push('/quizes');
        }
    };

    return (
        <div className="flex-container" style={{ height: '100%' }}>
            <div id="heading" style={{ margin: '30px' }}>
                {t('quizzone')}
                {/* <div style={{ fontSize: '12px' }}>Test your skills</div> */}
            </div>
            <div style={{ fontSize: '14px', margin: '5px' }}>{t('loginHelp')}</div>
            <div
                onKeyDown={() => {}}
                id="google-login"
                role="button"
                aria-label="Login"
                tabIndex={0}
                onClick={() => {
                    googleSignInbuttonClicked = true;
                }}
            />
        </div>
    );
};

export default Login;
