/* eslint-disable no-console */
import React, { useState } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useTranslation } from 'react-i18next';
// quizData in the form {answer: {}, questions: []}
const Quiz = ({ quizData, submitHandler, previewMode = false }) => {
    const { t } = useTranslation();
    const [isQuizStarted, setIsQuizStarted] = useState(previewMode);
    const [questionAnswers, setQuestionValues] = useState({});
    const [unAnswered, setUnAnsweredQuestions] = useState([]);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    const [timeConsumedText, setTimeConsumedText] = useState('');
    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    const handleChange = (event) => {
        const questionId = event.target.getAttribute('id');
        setQuestionValues({ ...questionAnswers, [questionId]: event.target.value });
    };

    const _submitHandler = () => {
        console.log('users submission', questionAnswers);
        const answeredQuestionIds = Object.keys(questionAnswers);
        const allQuestionIds = quizData.questions.map((q) => q.id);

        const unattended = allQuestionIds.filter((qId) => !answeredQuestionIds.includes(qId));
        setUnAnsweredQuestions(unattended);

        if (unattended.length == 0) {
            setIsSubmitDisabled(true);
            submitHandler(questionAnswers); // pass the data back to parent
        }
    };

    const timerProps = {
        size: 100,
        strokeWidth: 5
    };
    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Too late...</div>;
        }

        return (
            <div className="timer">
                <div className="text">Remaining</div>
                <div className="value">{remainingTime}</div>
                <div className="text">seconds</div>
            </div>
        );
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
                                id="option"
                                value={option}
                                control={<Radio disabled={isSubmitDisabled} id={question.id} />}
                                label={option}
                            />
                        );
                    })}
                </RadioGroup>
            </FormControl>
        );
    };

    const onTimeComplete = () => {
        setIsSubmitDisabled(true);
    };

    return (
        <div className="flex-container">
            <div id="timer">
                {isQuizStarted && !previewMode && (
                    <>
                        <CountdownCircleTimer
                            onComplete={onTimeComplete}
                            {...timerProps}
                            isPlaying={isQuizStarted && !isSubmitDisabled}
                            duration={60}
                            colors={[
                                ['#004777', 0.33],
                                ['#F7B801', 0.33],
                                ['#A30000', 0.33]
                            ]}
                            renderAriaTime={({ remainingTime, elapsedTime }) => {
                                isSubmitDisabled &&
                                    setTimeConsumedText(
                                        `You took ${Math.floor(elapsedTime)} seconds.`
                                    );
                            }}>
                            {renderTime}
                        </CountdownCircleTimer>
                        {timeConsumedText && <span>{timeConsumedText}</span>}
                    </>
                )}
            </div>
            <div style={{ padding: '20px' }}>
                {
                    <div>
                        {!isQuizStarted && (
                            <div className="flex-container">
                                <h1 id="title_name">{quizData.title}</h1>
                                <div>
                                    {t('quizHelp1')}
                                    {t('quizHelp2')}
                                    {t('quizHelp3')}
                                </div>
                                <div
                                    style={{
                                        cursor: 'pointer',
                                        padding: '5px',
                                        borderRadius: '5px',
                                        border: '1px solid gray',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                        width: '100px',
                                        marginTop: '20px'
                                    }}
                                    id="startbtn"
                                    onClick={() => {
                                        setIsQuizStarted(true);
                                    }}>
                                    <PlayCircleFilledWhiteIcon /> <span>Start</span>
                                </div>
                            </div>
                        )}

                        {isQuizStarted && quizData.questions.length ? (
                            <Grid>
                                <h1 id="title_name">{quizData.title}</h1>

                                <form className="quiz-form">
                                    {quizData.questions.map((question, _id) => {
                                        return renderQuestion(question, _id);
                                    })}
                                    <Button
                                        color="primary"
                                        style={{ width: '200px' }}
                                        variant="contained"
                                        onClick={_submitHandler}
                                        disabled={isSubmitDisabled}>
                                        Submit quiz
                                    </Button>
                                    {isSubmitDisabled && (
                                        <div>*You can submit a quiz only once</div>
                                    )}
                                </form>
                            </Grid>
                        ) : null}
                    </div>
                }
            </div>
        </div>
    );
};

export default Quiz;
