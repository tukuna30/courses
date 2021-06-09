/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Login = () => {
    const { id } = useParams();
    const [error, setError] = useState('');
    const [user, setUser] = useState({});

    useEffect(async () => {
        try {
            const rawRsponse = await fetch(`http://localhost:5001/user/${id}`, {
                method: 'GET'
            });
            console.log('raw response', rawRsponse);
            const jsonResponse = await rawRsponse.json();

            console.log('json response', jsonResponse, 'user detail');
            setUser(jsonResponse.user);
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    }, []);

    return (
        <>
            <div>Detail page</div>
            {error.length > 0 ? <div>Error fetching the data: {error}</div> : null}

            <div>Details about particular item with id: {id}</div>
            {user.firstName && (
                <>
                    <div>User name: {user.firstName}</div>
                    <div>User last name: {user.lastName}</div>
                </>
            )}

            {!user.firstName && <div>No user found with this id: {id}</div>}
        </>
    );
};

export default Login;
