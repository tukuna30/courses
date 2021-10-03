/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Quizes = () => {
    const [quizes, setQuizes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [deleteIsInProgress, setDeleteIsInProgress] = useState(false);

    const [isDeleteToastOpen, setIsDeleteToastOpen] = useState(false);
    const handleClose = () => {
        setOpenDeleteModal(false);
        setDeleteIsInProgress(false);
    };

    const hideDeleteToast = () => {
        setIsDeleteToastOpen(false);
    };

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5001/getPublishedQuizes', {
            method: 'GET',
            credentials: 'include'
        })
            .then((res) => {
                if (!res.ok) {
                    setTimeout(() => {
                        localStorage.removeItem('isUserLoggedIn');
                        history.push('/login');
                    }, 1000);
                    return Promise.resolve({});
                }
                return res.json();
            })
            .then((response) => {
                console.log('quizes data', response);
                setTimeout(() => {
                    setQuizes(response.quizes);
                    setIsLoading(false);
                }, 2000);
            })
            .catch((error) => console.log(error));
    }, []);

    const startDeleteQuiz = (_quiz) => {
        setOpenDeleteModal(true);
        setCurrentQuiz(_quiz);
    };

    const deleteQuiz = () => {
        console.log(currentQuiz);
        setDeleteIsInProgress(true);
        fetch(`http://localhost:5001/deleteQuiz?id=${currentQuiz._id}`, {
            method: 'POST',
            credentials: 'include'
        })
            .then((res) => {
                if (!res.ok) {
                    setTimeout(() => {
                        localStorage.removeItem('isUserLoggedIn');
                        history.push('/login');
                    }, 1000);
                    return Promise.resolve({});
                }
                return res.json();
            })
            .then(() => {
                setDeleteIsInProgress(false);
                setOpenDeleteModal(false);
                setIsDeleteToastOpen(true);
                window.location.reload(); // TODO: update state by removing the quiz and remove this page reload
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="flex-container">
            <h1 id="quizlist"> Quiz list </h1>
            {isLoading && <CircularProgress />}
            <ul style={{ padding: '20px' }}>
                {quizes.map((quiz) => (
                    <li key={quiz._id}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}>
                            <h3 style={{ marginRight: '20px' }}>{quiz.title}</h3>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    width: '100%'
                                }}>
                                <Chip clickable={false} label="Tech"></Chip>

                                <Link to={`/quiz_details/${quiz._id}`}>
                                    <LaunchIcon />
                                </Link>
                                <Link to={`/quiz_edit/${quiz._id}`}>
                                    <EditIcon />
                                </Link>

                                <DeleteIcon
                                    onClick={() => startDeleteQuiz(quiz)}
                                    style={{ cursor: 'pointer' }}
                                />

                                <Dialog
                                    open={openDeleteModal}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description">
                                    <DialogTitle id="alert-dialog-title">
                                        {deleteIsInProgress
                                            ? 'Delete is in progress'
                                            : 'Do you want to delete this quiz permanently?'}
                                    </DialogTitle>
                                    <DialogContent
                                        style={{ display: 'flex', justifyContent: 'center' }}>
                                        <DialogContentText id="alert-dialog-description">
                                            {deleteIsInProgress ? (
                                                <CircularProgress />
                                            ) : (
                                                `You'll loose this quiz and it's data.`
                                            )}
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Cancel
                                        </Button>
                                        <Button
                                            disabled={deleteIsInProgress}
                                            onClick={deleteQuiz}
                                            color="primary"
                                            autoFocus>
                                            Delete
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                                <Snackbar
                                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    autoHideDuration={12000}
                                    open={isDeleteToastOpen}
                                    onClose={hideDeleteToast}
                                    key={'delete quiz toast'}>
                                    <Alert onClose={hideDeleteToast} severity={'success'}>
                                        {`Successfully deleted quiz with title: ${
                                            currentQuiz && currentQuiz.title
                                        }`}
                                    </Alert>
                                </Snackbar>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quizes;
