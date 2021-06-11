/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5001/users`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((response) => {
                console.log('response data', response);
                setTimeout(() => {
                    setQuestions(response.users);
                    setIsLoading(false);
                }, 1000);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1> Tests list </h1>
            {isLoading && <p>Loading data...</p>}
            <ul>
                {questions.map((question) => (
                    <li key={question}>
                        <Link to={`/details/${question.id}`}>
                            {question.firstName} {question.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
    
        </div>
    );
};

export default Questions;
