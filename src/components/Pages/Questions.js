/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5001/users`, {
            method: 'GET',
            credentials: 'include'
        })
            .then((res) => {
                if (!res.ok) {
                    setTimeout(() => {
                        history.push('/login');
                    }, 1000);
                    return Promise.resolve({});
                }
                return res.json();
            })
            .then((response) => {
                console.log('response data', response);
                setTimeout(() => {
                    setQuestions(response.users);
                    setIsLoading(false);
                }, 2000);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1> Tests list </h1>
            {isLoading && <CircularProgress />}
            <ul>
                {questions.map((question) => (
                    <li key={question}>
                        <Link to={`/details/${question.id}`}>
                            {question.firstName} {question.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
            );
        </div>
    );
};

export default Questions;
