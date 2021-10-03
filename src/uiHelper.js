export const getApiBaseUrl = () => {
    return process.env.NODE_ENV === 'development' ? 'http://localhost:5001/' : '/api';
};

export const isValidEmail = (email) => {
    // TODO: add validation logic for email and return true or false;
    return true;
};

export const getScore = (answerObj, submissionObj) => {
    const totalQuestions = Object.keys(answerObj).length;

    let correctAnswers = 0;
    Object.keys(answerObj).forEach((questionId) => {
        if (answerObj[questionId] === submissionObj[questionId]) {
            correctAnswers++;
        }
    });

    return (correctAnswers / totalQuestions) * 100;
};
