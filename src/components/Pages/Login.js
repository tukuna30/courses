import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const login = async () => {
        const rawResponse = await fetch(`http://localhost:5001/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: 'admin@quizzone.com', password: '123456' })
        });

        if (rawResponse.ok) {
            history.push('/questions');
        }
    };

    return (
        <>
            <div>Login to Quizzone</div>
            <button type="submit" onClick={login}>
                click here to Login{' '}
            </button>
        </>
    );
};

export default Login;
