export const getApiBaseUrl = () => {
    console.log('env', process.env.NODE_ENV);
    return process.env.NODE_ENV === 'development' ? 'http://localhost:5001/' : '/api/';
};

export const isValidEmail = (email) => {
    // TODO: add validation logic for email and return true or false;
    return true;
};
