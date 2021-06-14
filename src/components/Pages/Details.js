/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';

const Detail = () => {
    const { id } = useParams();
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [toastMessage, setToastMessage] = useState('');

    const [isToastOpen, setIsToastOpen] = useState(false);

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

    const updateUser = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUserDetails = async (event) => {
        event.preventDefault();
        if (!user.firstName) {
            setToastMessage('User name can not be blank');
            setIsToastOpen(true);
            return;
        }

        try {
            console.log('user save in progress', user);
            const rawRsponse = await fetch(`http://localhost:5001/user/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const jsonResponse = await rawRsponse.json();

            console.log('json response user save', jsonResponse, 'user detail');
            setUser(jsonResponse.user);
            setToastMessage('Your profile is saved');
            setIsToastOpen(true);
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    };

    return (
        <>
            <div>User Detail page</div>
            {error.length > 0 ? <div>Error fetching the data: {error}</div> : null}
            <div>Details about particular item with id: {id}</div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isToastOpen}
                onClose={() => {
                    setIsToastOpen(false);
                }}
                autoHideDuration={5000}
                message={toastMessage}
                key="profile_save"
            />
            (
            <>
                <div>User name: {user.firstName}</div>
                <div>User last name: {user.lastName}</div>
                <form>
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={updateUser}
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={updateUser}
                            placeholder="Last Name"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Save"
                        onClick={(e) => {
                            saveUserDetails(e);
                        }}
                    />
                </form>
            </>
        </>
    );
};

export default Detail;
