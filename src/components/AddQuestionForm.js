import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

const AddQuestionForm = ({ setOneQuestionData, isDialogOpen, handleClose, questions }) => {
    const [questionData, setQuestionData] = React.useState({ options: [] });
    const [inCompleteQuestion, setInCompleteQuestion] = React.useState(false);
    const [invalidAnswer, setInvalidAnswer] = React.useState(false);
    const handleQuestionTitleChange = (event) => {
        const qD = { ...questionData, title: event.target.value };
        setQuestionData(qD);
        checkFormErrors(qD);
    };

    const handleQuestionDescriptionChange = (event) => {
        setQuestionData({ ...questionData, description: event.target.value });
    };

    const handleQuestionOptionChange = (event) => {
        const _options = [...questionData.options];
        _options[event.target.id] = event.target.value;
        const qD = { ...questionData, options: _options };
        setQuestionData(qD);
        checkFormErrors(qD);
    };

    const handleQuestionAnswerChange = (event) => {
        const qData = { ...questionData, answer: event.target.value };
        setQuestionData(qData);
        checkFormErrors(qData);
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
    const handleAddQuestion = () => {
        if (checkFormErrors(questionData)) {
            setOneQuestionData({ ...questionData, id: `${questions.length + 1}` });
            setQuestionData({ options: [] });
        }
    };

    console.log('question data', questionData);

    const renderOptions = () => {
        let options = [];
        for (let i = 0; i < 4; i++) {
            options.push(
                <div>
                    <TextField
                        error={inCompleteQuestion && !questionData.options[i]}
                        style={{ width: '50vw' }}
                        value={questionData.options[i]}
                        id={i}
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
    return (
        <Dialog
            fullWidth={true}
            maxWidth={'md'}
            open={isDialogOpen}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title">
            <DialogTitle id="max-width-dialog-title">
                <div>Add details for Question {questions.length + 1}</div>
                {invalidAnswer && (
                    <span style={{ fontSize: '14px', color: 'red' }}>
                        Answer should match one option
                    </span>
                )}
                {!invalidAnswer && inCompleteQuestion && (
                    <span style={{ fontSize: '14px', color: 'red' }}>Fill all * marked fields</span>
                )}
            </DialogTitle>
            <DialogContent>
                <form Validate key={questions.length}>
                    <FormControl>
                        <div>
                            <TextField
                                error={inCompleteQuestion && !questionData.title}
                                style={{ width: '50vw' }}
                                value={questionData.title}
                                id="title"
                                placeholder="Question title *"
                                required
                                variant="filled"
                                onChange={handleQuestionTitleChange}
                            />
                        </div>

                        <div>
                            <TextField
                                style={{ width: '50vw' }}
                                value={questionData.description}
                                id="description"
                                placeholder="Question description"
                                variant="filled"
                                onChange={handleQuestionDescriptionChange}
                            />
                        </div>
                        <br></br>
                        {renderOptions()}
                        <br></br>
                        <div>
                            <TextField
                                style={{ width: '50vw' }}
                                error={inCompleteQuestion && !questionData.answer}
                                id="answer"
                                value={questionData.answer}
                                placeholder="Question answer *"
                                required
                                variant="filled"
                                onChange={handleQuestionAnswerChange}
                            />
                        </div>
                    </FormControl>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAddQuestion} color="primary" variant="contained">
                    Add
                </Button>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddQuestionForm;
