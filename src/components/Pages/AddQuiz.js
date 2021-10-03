import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory } from 'react-router-dom';
import AddQuestionForm from '../AddQuestionForm';
import Quiz from '../Quiz';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch'
        }
    },
    section: {
        paddingTop: '30px'
    }
}));

export default function AddQuiz() {
    const history = useHistory();

    const [quizData, setQuizData] = useState({ questions: [] });
    const [inCompleteQuiz, setInCompleteQuiz] = useState(false);
    const setOneQuestionData = (newQuestionData) => {
        const _questions = [...quizData.questions, newQuestionData];
        setQuizData({ ...quizData, questions: _questions });
    };
    const classes = useStyles();

    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {
        lastLogIn: undefined
    };
    const isSessionActive = Date.now() - currentUser.lastLogIn <= 60 * 1000 * 60 * 24;

    if (!isSessionActive) {
        history.push('/login');
    }

    const handleTitleChange = (event) => {
        setQuizData({ ...quizData, title: event.target.value });
    };

    const handleDescriptionChange = (event) => {
        setQuizData({ ...quizData, description: event.target.value });
    };

    const handleAddQuiz = () => {
        setOpen(true);
    };

    const saveQuiz = async () => {
        console.log('quiz data', quizData);
        if (quizData.questions.length < 5 || !quizData.title || !quizData.description) {
            setInCompleteQuiz(true);
        } else {
            setInCompleteQuiz(false);

            const rawResponse = await fetch(`http://localhost:5001/addQuiz`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...quizData, createdAt: Date.now(), status: 'unpublished' })
            });

            if (rawResponse.ok) {
                console.log('added one quiz');
            }
        }
    };
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid direction="row" container md={12}>
            <Grid md={6} xs={12} className={classes.section}>
                <form className={classes.root} Validate autoComplete="off">
                    {!quizData.title ||
                        (!quizData.description && quizData.questions.length == 0 && (
                            <span style={{ fontSize: '14px', color: 'red' }}>
                                Fill all required fields
                            </span>
                        ))}
                    {inCompleteQuiz && quizData.questions.length < 5 ? (
                        <>
                            <span>
                                So far <bold>{quizData.questions.length} </bold> question(s) added!
                            </span>
                            <div style={{ fontSize: '14px', color: 'red' }}>
                                Add at least 5 questions!
                            </div>
                        </>
                    ) : null}

                    <div>
                        <TextField
                            error={inCompleteQuiz && !quizData.title}
                            id="title-quiz"
                            label="Title of the Quiz"
                            placeholder="Short title"
                            required
                            variant="filled"
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            id="description-quiz"
                            label="Description of the Quiz"
                            error={inCompleteQuiz && !quizData.description}
                            placeholder="What is this quiz about"
                            required
                            variant="filled"
                            onChange={handleDescriptionChange}
                        />
                    </div>
                    <div>
                        <Button
                            id="submit"
                            style={{ marginRight: '20px' }}
                            onClick={handleAddQuiz}
                            variant="contained"
                            color="primary">
                            Add question
                        </Button>
                        <Button
                            onClick={saveQuiz}
                            id="save"
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<SaveIcon />}>
                            Save
                        </Button>
                    </div>
                    <AddQuestionForm
                        isDialogOpen={open}
                        questions={quizData.questions}
                        setOneQuestionData={setOneQuestionData}
                        handleClose={handleClose}
                    />
                </form>
            </Grid>
            <Grid md={6} xs={12} className={classes.section}>
                <div style={{ fontSize: '20px' }}>Quiz Preview Mode</div>
                <Quiz quizData={quizData} submitHandler={() => {}} previewMode={true} />
            </Grid>
        </Grid>
    );
}
