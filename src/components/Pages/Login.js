import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Login = () => {
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
    }, []);

    window.onSignIn = async function data(googleUser) {
        console.log('google login success');
        const profile = googleUser.getBasicProfile();
        console.log(`ID: ${profile.getId()}`); // Do not send to your backend! Use an ID token instead.
        console.log(`Name: ${profile.getName()}`);
        console.log(`Image URL: ${profile.getImageUrl()}`);
        console.log(`Email: ${profile.getEmail()}`);

        const rawResponse = await fetch(`http://localhost:5001/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: profile.getEmail() })
        });

        if (rawResponse.ok) {
            history.push('/courses');
        }
    }; // This is null if the 'email' scope is not present.

    return (
        <>
            <div>Login to Quizzone</div>
            <div id="google-login" />
        </>
    );
};

export default Login;
