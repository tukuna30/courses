/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './Details.css';

const Questions = () => {
    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState('');
    const [quiz, setQuiz] = useState({ questions: [] });
    const [toastMessage, setToastMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [questionValues, setQuestionValues] = useState({});
    const [isToastOpen, setIsToastOpen] = useState(false);

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

            setQuiz(jsonResponse.quiz); //
            setIsLoading(false);
            // {name: '', questions: [{title: , options: ['strings']}]}
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    }, []);

    const handleChange = (event) => {
        const questionId = event.target.getAttribute('id');
        setQuestionValues({ ...questionValues, [questionId]: event.target.value });
    };

    const submitHandler = () => {
        console.log('users submission', questionValues);
    };

    const renderQuestion = (question, _id) => {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">{`${_id + 1}) ${question.title}`}</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    id={question.id}
                    value={questionValues.id}
                    onChange={handleChange}>
                    {question.options.map((option) => {
                        return (
                            <FormControlLabel
                                value={option}
                                control={<Radio id={question.id} />}
                                label={option}
                            />
                        );
                    })}
                </RadioGroup>
            </FormControl>
        );
    };

    return (
        <div style={{ padding: '20px' }}>
            {isLoading && <div>Loading quiz...</div>}
            {!isLoading && (
                <div>
                    <h1>{quiz.name}</h1>
                    <Grid>
                        <form className="quiz-form">
                            {quiz.questions.map((question, _id) => {
                                return renderQuestion(question, _id);
                            })}
                            <Button color="primary" variant="contained" onClick={submitHandler}>
                                Submit quiz
                            </Button>
                        </form>
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default Questions;
