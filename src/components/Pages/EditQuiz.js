/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AddQuestionForm from '../AddQuestionForm';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const EditQuiz = () => {
    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState('');
    const [quizData, setQuizData] = useState({ questions: [] });
    const [inCompleteQuiz, setInCompleteQuiz] = useState(false);

    const [toastMessage, setToastMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isToastOpen, setIsToastOpen] = useState(false);
    let [alertType, setAlertType] = useState('error');

    const [inCompleteQuestion, setInCompleteQuestion] = React.useState(false);
    const [invalidAnswer, setInvalidAnswer] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [showDeleteQuestionDialog, setShowDeleteQuestionDialg] = React.useState(false);
    const [deleteQuestionIndex, setDeleteQuestionIndex] = React.useState(undefined);

    const handleQuestionTitleChange = (event) => {
        const qId = event.target.id;
        const questions = [...quizData.questions];
        questions[qId].title = event.target.value;
        const qD = { ...quizData, questions };
        setQuizData(qD);
        checkFormErrors(qD);
    };

    const handleAddQuiz = () => {
        setOpen(true);
    };

    const handleQuestionDescriptionChange = (event) => {
        const qId = event.target.id;
        const questions = [...quizData.questions];
        questions[qId].description = event.target.value;
        const qD = { ...quizData, questions };
        setQuizData(qD);
    };

    const handleQuestionOptionChange = (event) => {
        const qId = event.target.id[0];
        const oId = event.target.id[1];

        const _options = [...quizData.questions[qId].options];
        _options[oId] = event.target.value;
        const questions = [...quizData.questions];
        questions[qId].options = _options;

        const qD = { ...quizData, questions };
        setQuizData(qD);
        checkFormErrors(qD);
    };

    const handleQuestionAnswerChange = (event) => {
        const qId = event.target.id;
        const questions = [...quizData.questions];
        questions[qId].answer = event.target.value;
        const qD = { ...quizData, questions };
        setQuizData(qD);
        checkFormErrors(qD);
    };

    const checkFormErrors = (_questionData) => {
        const validAnswer =
            _questionData.answer && _questionData.options.includes(_questionData.answer);

        const formFilled =
            _questionData.title && _questionData.answer && _questionData.options.length === 4;

        if (formFilled && new Set(_questionData.options).size === 4 && validAnswer) {
            console.log('complete question');
            setInCompleteQuestion(false);
            setInvalidAnswer(false);
            return true;
        } else {
            setInCompleteQuestion(true);
            formFilled && !validAnswer && setInvalidAnswer(true);
            console.log('incomplete questions');
        }
    };

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    useEffect(async () => {
        try {
            setIsLoading(true);
            const rawRsponse = await fetch(`http://localhost:5001/quiz/${id}?edit=true`, {
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

            setQuizData({ id, ...jsonResponse.quiz }); //
            setIsLoading(false);
            // {name: '', questions: [{title: , options: ['strings']}]}
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    }, []);

    const handleQuizTitleChange = (event) => {
        setQuizData({ ...quizData, title: event.target.value });
    };

    const handleQuizDescriptionChange = (event) => {
        setQuizData({ ...quizData, description: event.target.value });
    };
    const handleClose = () => {
        setIsToastOpen(false);
    };

    const handleNewQuestionClose = () => {
        setOpen(false);
    };

    const setOneQuestionData = (questionData) => {
        handleNewQuestionClose();
        console.log('new question', questionData);
        const questions = quizData.questions;
        const newQuestions = [...questions, questionData];
        quizData.questions = newQuestions;
        setQuizData({ ...quizData });
    };

    const updateQuiz = async () => {
        console.log('quiz data', quizData);

        const areAllQuestionsComplete = quizData.questions.every((question) => {
            return (
                question.answer &&
                question.options.includes(question.answer) &&
                question.title &&
                question.options.length === 4 &&
                new Set(question.options).size === 4
            );
        });

        if (areAllQuestionsComplete && quizData.title && quizData.description) {
            setInCompleteQuiz(false);
            // write code to make api call to store users submission
            const rawRsponse = await fetch(`http://localhost:5001/updateQuiz?id=${id}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...quizData, updatedAt: Date.now(), status: 'unpublished' })
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
        } else {
            setInCompleteQuiz(true);
        }
    };

    const renderOptions = (question, qIndex) => {
        let options = [];
        for (let i = 0; i < 4; i++) {
            options.push(
                <div style={{ position: 'relative' }}>
                    <span
                        style={{
                            left: '-30px',
                            top: '20px',
                            padding: '5px',
                            position: 'absolute'
                        }}>
                        O{i + 1}
                    </span>
                    <TextField
                        error={inCompleteQuestion && !question.options[i]}
                        style={{ width: '50vw' }}
                        value={question.options[i]}
                        id={`${qIndex}${i}`}
                        placeholder={`option${i + 1}*`}
                        required
                        variant="filled"
                        onChange={handleQuestionOptionChange}
                    />
                </div>
            );
        }

        return options;
    };

    const showDeleteQuestion = (index) => {
        setDeleteQuestionIndex(index);
        setShowDeleteQuestionDialg(true);
    };

    const handleDeleteQuestionClose = () => {
        setShowDeleteQuestionDialg(false);
    };

    const deleteQuizQuestion = () => {
        setShowDeleteQuestionDialg(false);

        quizData.questions.splice(deleteQuestionIndex, 1);
    };

    return (
        <div className="flex-container">
            <div style={{ padding: '20px' }}>
                {isLoading && <div>Loading quiz...</div>}
                {!isLoading && (
                    <>
                        <div style={{ marginLeft: '20px' }}>
                            <TextField
                                error={inCompleteQuiz && !quizData.title}
                                id="title-quiz"
                                label="Title of the Quiz"
                                placeholder="Short title"
                                required
                                variant="filled"
                                value={quizData.title}
                                onChange={handleQuizTitleChange}
                                fullWidth
                            />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <TextField
                                id="description-quiz"
                                label="Description of the Quiz"
                                error={inCompleteQuiz && !quizData.description}
                                placeholder="What is this quiz about"
                                required
                                fullWidth
                                variant="filled"
                                value={quizData.description}
                                onChange={handleQuizDescriptionChange}
                            />
                        </div>
                        {quizData.questions.map((question, qIndex) => {
                            return (
                                <form
                                    Validate
                                    style={{
                                        border: '1px solid gray',
                                        borderRadius: '5px',
                                        margin: '20px 0 20px 20px',
                                        padding: '30px',
                                        position: 'relative'
                                    }}>
                                    <DeleteIcon
                                        onClick={() => showDeleteQuestion(qIndex)}
                                        style={{
                                            position: 'absolute',
                                            right: '4px',
                                            cursor: 'pointer',
                                            top: '50px',
                                            color: 'red'
                                        }}
                                    />

                                    <FormControl>
                                        <div style={{ position: 'relative' }}>
                                            <span
                                                style={{
                                                    left: '-30px',
                                                    top: '20px',
                                                    padding: '5px',
                                                    position: 'absolute'
                                                }}>
                                                Q{qIndex + 1}
                                            </span>
                                            <TextField
                                                error={inCompleteQuestion && !question.title}
                                                style={{ width: '50vw' }}
                                                value={question.title}
                                                id={qIndex}
                                                placeholder="Question title *"
                                                required
                                                variant="filled"
                                                onChange={handleQuestionTitleChange}
                                            />
                                        </div>

                                        <div>
                                            <TextField
                                                style={{ width: '50vw' }}
                                                value={question.description}
                                                id={qIndex}
                                                placeholder="Question description"
                                                variant="filled"
                                                onChange={handleQuestionDescriptionChange}
                                            />
                                        </div>
                                        <br></br>
                                        {renderOptions(question, qIndex)}
                                        <br></br>
                                        <div style={{ position: 'relative' }}>
                                            <span
                                                style={{
                                                    left: '-30px',
                                                    top: '20px',
                                                    padding: '5px',
                                                    position: 'absolute'
                                                }}>
                                                A{qIndex + 1}
                                            </span>
                                            <TextField
                                                style={{ width: '50vw' }}
                                                error={inCompleteQuestion && !question.answer}
                                                id={qIndex}
                                                value={question.answer}
                                                placeholder="Question answer *"
                                                required
                                                variant="filled"
                                                onChange={handleQuestionAnswerChange}
                                            />
                                        </div>
                                    </FormControl>
                                </form>
                            );
                        })}
                        <Button
                            id="submit"
                            style={{ marginRight: '20px', marginLeft: '20px' }}
                            onClick={handleAddQuiz}
                            variant="contained"
                            color="primary">
                            Add a new question
                        </Button>
                    </>
                )}
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={updateQuiz}>
                    Update Quiz
                </Button>
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
            <AddQuestionForm
                questions={quizData.questions}
                isDialogOpen={open}
                setOneQuestionData={setOneQuestionData}
                handleClose={handleNewQuestionClose}
            />

            <Dialog
                open={showDeleteQuestionDialog}
                onClose={handleDeleteQuestionClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {'Do you want to delete this question?'}
                </DialogTitle>
                <DialogContent style={{ display: 'flex', justifyContent: 'center' }}>
                    <DialogContentText id="alert-dialog-description">
                        You'll loose this question and it's data.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteQuestionClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={deleteQuizQuestion}
                        style={{ color: 'red' }}
                        color="secondary"
                        autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default EditQuiz;
