/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { getScore } from '../../uiHelper';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './Details.css';

const Questions = () => {
    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState('');
    const [quiz, setQuiz] = useState({ questions: [] });
    const [toastMessage, setToastMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [questionAnswers, setQuestionValues] = useState({});
    const [isToastOpen, setIsToastOpen] = useState(false);
    const [unAnswered, setUnAnsweredQuestions] = useState([]);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
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
        setQuestionValues({ ...questionAnswers, [questionId]: event.target.value });
    };

    const handleClose = () => {
        setIsToastOpen(false);
    };

    const submitHandler = () => {
        console.log('users submission', questionAnswers);
        const answeredQuestionIds = Object.keys(questionAnswers);
        const allQuestionIds = quiz.questions.map((q) => q.id);

        const unattended = allQuestionIds.filter((qId) => !answeredQuestionIds.includes(qId));
        setUnAnsweredQuestions(unattended);

        if (unattended.length == 0) {
            // write code to make api call to store users submission

            const score = getScore(quiz.answer, questionAnswers);

            if (score >= 40 && score < 70) {
                alertType = 'warning';
            } else if (score >= 70) {
                alertType = 'success';
            }

            setAlertType(alertType);
            setToastMessage(`Your score is ${score}`);
            setIsToastOpen(true);
            setIsSubmitDisabled(true);
        }
    };

    const renderQuestion = (question, _id) => {
        const isUnanswered = unAnswered.includes(question.id);
        return (
            <FormControl component="fieldset" error={isUnanswered}>
                {isUnanswered && <FormHelperText>{'Select an answer'}</FormHelperText>}
                <FormLabel component="legend">{`${_id + 1}* ${question.title}`}</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    id={question.id}
                    value={questionAnswers.id}
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
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={submitHandler}
                                disabled={isSubmitDisabled}>
                                Submit quiz
                            </Button>
                            {isSubmitDisabled && <div>*You can submit a quiz only once</div>}
                        </form>
                    </Grid>
                </div>
            )}
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
