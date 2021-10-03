/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Quiz from '../Quiz';
import { getScore } from '../../uiHelper';

const Questions = () => {
    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState('');
    const [quiz, setQuiz] = useState({ questions: [] });
    const [toastMessage, setToastMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isToastOpen, setIsToastOpen] = useState(false);
    let [alertType, setAlertType] = useState('error');

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    useEffect(async () => {
        try {
            setIsLoading(true);
            const rawRsponse = await fetch(`http://localhost:5001/quiz/${id}`, {
                method: 'GET',
                credentials: 'include'
            });
            console.log('raw response', rawRsponse);

            if (!rawRsponse.ok) {
                if (rawRsponse.status === 401);
                setError('You need to login!');
                setTimeout(() => {
                    localStorage.removeItem('isUserLoggedIn');
                    history.push('/login');
                }, 1500);

                return;
            }
            const jsonResponse = await rawRsponse.json();
            console.log('quessee', jsonResponse.quiz);

            setQuiz({ id, ...jsonResponse.quiz }); //
            setIsLoading(false);
            // {name: '', questions: [{title: , options: ['strings']}]}
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    }, []);

    const handleClose = () => {
        setIsToastOpen(false);
    };

    const submitHandler = async (questionAnswers) => {
        // write code to make api call to store users submission
        const rawRsponse = await fetch(`http://localhost:5001/submitQuiz`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, questionAnswers })
        });
        console.log('raw response', rawRsponse);

        if (!rawRsponse.ok) {
            if (rawRsponse.status === 401);
            setError('You need to login!');
            setTimeout(() => {
                localStorage.removeItem('isUserLoggedIn');
                history.push('/login');
            }, 1500);

            return;
        }

        const jsonResponse = await rawRsponse.json();
        console.log('success response', jsonResponse);

        console.log('question answers', questionAnswers);
        const score = getScore(jsonResponse.result, questionAnswers);

        if (score >= 40 && score < 70) {
            alertType = 'warning';
        } else if (score >= 70) {
            alertType = 'success';
        }

        setAlertType(alertType);
        setToastMessage(`Your score is ${score}`);
        setIsToastOpen(true);
    };

    return (
        <div className="flex-container">
            <div style={{ padding: '20px' }}>
                {isLoading && <div>Loading quiz...</div>}
                {!isLoading && <Quiz submitHandler={submitHandler} quizData={quiz} />}
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={12000}
                open={isToastOpen}
                onClose={handleClose}
                key={'success toast'}>
                <Alert onClose={handleClose} severity={alertType}>
                    {toastMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Questions;
