/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const Quizes = () => {
    const [quizes, setQuizes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5001/quizes`, {
            method: 'GET',
            credentials: 'include'
        })
            .then((res) => {
                if (!res.ok) {
                    setTimeout(() => {
                        localStorage.removeItem('isUserLoggedIn');
                        history.push('/login');
                    }, 1000);
                    return Promise.resolve({});
                }
                return res.json();
            })
            .then((response) => {
                console.log('response data', response);
                setTimeout(() => {
                    setQuizes(response.quizes);
                    setIsLoading(false);
                }, 2000);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1> Quiz list </h1>
            {isLoading && <CircularProgress />}
            <ul>
                {quizes.map((quiz) => (
                    <li key={quiz.id}>
                        <Link to={`/details/${quiz.id}`}>{quiz.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quizes;
