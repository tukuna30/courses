import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    window.onSignIn = async function data(googleUser) {
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
            history.push('/questions');
        }


     }; // This is null if the 'email' scope is not present.
     
  

    const login = async () => {
        
    };

    return (
        <>
            <div>Login to Quizzone</div>
            
            <div> 
        <div id="sign-in-button" data-width="450" data-height="100" className="g-signin2" data-onsuccess="onSignIn" />
      </div>
        </>
    );
};

export default Login;


