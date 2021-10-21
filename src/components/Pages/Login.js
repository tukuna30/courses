import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './login.css';
import { getApiBaseUrl } from '../../uiHelper';
import Button from '@material-ui/core/Button';

let googleSignInbuttonClicked = false;
const Login = ({ setUserLoggedIn }) => {
    const history = useHistory();

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

        const rawResponse = await fetch(`${getApiBaseUrl()}login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (rawResponse.ok) {
            const data = await rawResponse.json();
            console.log('current user from db', data.user);
            localStorage.setItem(
                'currentUser',
                JSON.stringify({ ...data.user, lastLogIn: Date.now() })
            );
            setUserLoggedIn(true);
            history.push('/courses');
        }
    }; // This is null if the 'email' scope is not present.

    return (
        <div className="flex-container" style={{ height: '100%' }}>
            <div className="login-container flex-container">
                <div id="heading">Login to continue</div>
                <div
                    /*class="g-signin2"
                data-width="200"
                data-height="60"*/

                    onKeyDown={() => {}}
                    id="google-login"
                    role="button"
                    aria-label="Login"
                    tabIndex={0}
                    onClick={() => {
                        googleSignInbuttonClicked = true;
                    }}
                />
                <div style={{ margin: '-20px 0 10px 0' }}>Or</div>
                <div>
                    <Button
                        style={{ background: '#eaab7c', borderRadius: '5px' }}
                        onClick={() => {
                            history.push('/guest_courses');
                        }}>
                        Continue as Guest
                    </Button>
                </div>
                <div className="small-text margin-top-10">
                    By Proceeding you agree to our Terms of Service and Privacy Policy
                </div>
            </div>
        </div>

        /*   <>

            <div>Login to courses</div>
            <div id="google-login" />
        </>
  */
    );
};

export default Login;
