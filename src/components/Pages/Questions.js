/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import './Details.css';

const Questions = () => {
    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState('');
    const [course, setCourse] = useState({ topics: [] });
    const [toastMessage, setToastMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [isToastOpen, setIsToastOpen] = useState(false);

    useEffect(async () => {
        try {
            setIsLoading(true);
            const rawRsponse = await fetch(`http://localhost:5001/course/${id}`, {
                method: 'GET',
                credentials: 'include'
            });

            if (!rawRsponse.ok) {
                if (rawRsponse.status === 401);
                setError('You need to login!');
                setTimeout(() => {
                    history.push('/login');
                }, 1500);

                return;
            }
            const jsonResponse = await rawRsponse.json();
            console.log('chapter', jsonResponse.course);
            setCourse(jsonResponse.course);
            setIsLoading(false);
            // {name: '', questions: [{title: , options: ['strings']}]}
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    }, []);

    const renderQuestion = (question, _id) => {
        return (
            <div>
                <h3>{`${_id + 1}) ${question.title}`} </h3>
                {question.options.map((option) => {
                    return {
                        /* <div key={option}>
                            <input type="radio" value={option} name={option} />
                            <span>{option}</span>
                            <br />
                        </div>
   */
                    };
                })}
            </div>
        );
    };

    return (
        <div style={{ padding: '20px' }}>
            {isLoading && <div>Loading courses...</div>}
            {!isLoading && (
                <div>
                    <h1>{course.name}</h1>
                    <h2>{course.description}</h2>
                    {/* <form>
                        {course.topics.map((question, _id) => {
                            return renderQuestion(question, _id);
                        })}
                        <input type="submit" value="Submit" />
                    </form> */}
                </div>
            )}
        </div>
    );
};

export default Questions;
