/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5001/students`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((response) => {
                console.log('response data', response);
                setTimeout(() => {
                    setQuestions(response.users);
                    setIsLoading(false);
                }, 5000);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1> Questions list </h1>
            {isLoading && <p>Loading data...</p>}
            <ul>
                {questions.map((question) => (
                    <li key={question}>
                        {question.first_name} {question.last_name}
                    </li>
                ))}
            </ul>
            );
        </div>
    );
};

export default Questions;
