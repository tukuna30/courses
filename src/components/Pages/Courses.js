/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DialogContentText from '@material-ui/core/DialogContentText';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const [currentCourse, setCurrentCurse] = React.useState(null);
    const [deleteIsInProgress, setDeleteIsInProgress] = useState(false);
    const [isDeleteToastOpen, setIsDeleteToastOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const closeDeleteModal = () => {
        setOpenDeleteModal(false);
    };

    const startDeleteCourse = (_course) => {
        setOpenDeleteModal(true);
        setCurrentCurse(_course);
    };

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };
    const hideDeleteToast = () => {
        setIsDeleteToastOpen(false);
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5001/courses`, {
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
                console.log('response data', response);
                setTimeout(() => {
                    setCourses(response.courses);
                    setIsLoading(false);
                }, 2000);
            })
            .catch((error) => console.log(error));
    }, []);

    const paidCourses = [
        {
            name: 'Web apps with JRNM',
            description: 'Build modern web apps using JavaScript, React, NodeJS and MongoDB',
            isPaid: true
        }
    ];

    const deleteCourse = () => {
        setDeleteIsInProgress(true);
        fetch(`http://localhost:5001/deleteCourse?id=${currentCourse._id}`, {
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
        <div
            className="list flex-container"
            style={{
                padding: '20px'
            }}>
            <h1> All available courses </h1>
            {isLoading && <CircularProgress />}

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly'
                }}>
                {courses.length
                    ? [...courses, ...paidCourses].map((course) => (
                          <Card
                              key={course.id}
                              style={{ minWidth: '320px', margin: '10px', padding: '10px' }}>
                              <CardActionArea>
                                  <CardContent>
                                      <Typography gutterBottom variant="h5" component="h5">
                                          {course.title}
                                      </Typography>
                                      <Typography
                                          variant="body2"
                                          color="textSecondary"
                                          component="p">
                                          {course.description}
                                      </Typography>
                                      {course.imageUrl && (
                                          <img
                                              style={{ width: '40px', height: 'auto' }}
                                              src={course.imageUrl}></img>
                                      )}
                                  </CardContent>
                              </CardActionArea>
                              <CardActions>
                                  <Button color="primary">
                                      {course.isPaid ? (
                                          <>
                                              <div
                                                  style={{
                                                      position: 'absolute',
                                                      top: '-90px',
                                                      left: '280px',
                                                      fontSize: '18px',
                                                      color: 'red',
                                                      width: '150px'
                                                  }}>
                                                  (Paid course)
                                              </div>
                                              <span onClick={() => setOpen(true)}>
                                                  Buy the course
                                              </span>
                                          </>
                                      ) : (
                                          <Link to={`/details/${course._id}`}>Start course</Link>
                                      )}
                                  </Button>
                                  {course.isPaid ? null : (
                                      <DeleteIcon
                                          onClick={() => startDeleteCourse(course)}
                                          style={{ cursor: 'pointer' }}
                                      />
                                  )}
                                  <Link to={`/edit/${course._id}`}>
                                      <EditIcon />
                                  </Link>
                              </CardActions>
                          </Card>
                      ))
                    : null}
                <>
                    <Dialog
                        fullWidth={true}
                        maxWidth={'md'}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="max-width-dialog-title">
                        <DialogTitle id="max-width-dialog-title">
                            <div>Purchase the course!</div>
                        </DialogTitle>
                        <DialogContent>
                            <iframe
                                width="800"
                                height="600"
                                src={`https://rzp.io/l/smeraCourseJSFullStack`}
                            />
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <Dialog
                        open={openDeleteModal}
                        onClose={closeDeleteModal}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">
                            {deleteIsInProgress
                                ? 'Delete is in progress'
                                : 'Do you want to delete this course permanently?'}
                        </DialogTitle>
                        <DialogContent style={{ display: 'flex', justifyContent: 'center' }}>
                            <DialogContentText id="alert-dialog-description">
                                {deleteIsInProgress ? (
                                    <CircularProgress />
                                ) : (
                                    `You'll loose this course and it's data.`
                                )}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeDeleteModal} color="primary">
                                Cancel
                            </Button>
                            <Button
                                disabled={deleteIsInProgress}
                                onClick={deleteCourse}
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
                        key={'delete course toast'}>
                        <Alert onClose={hideDeleteToast} severity={'success'}>
                            {`Successfully deleted course with title: ${
                                currentCourse && currentCourse.title
                            }`}
                        </Alert>
                    </Snackbar>
                </>
            </div>
        </div>
    );
};

export default Courses;
