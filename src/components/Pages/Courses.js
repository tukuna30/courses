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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
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

    return (
        <div
            className="list"
            style={{
                padding: '20px',
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <h1> All availalbe courses </h1>
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
                                        {course.name}
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
                                        <Link to={`/details/${course.id}`}>Start course</Link>
                                    )}
                                </Button>
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
                </>
            </div>
        </div>
    );
};

export default Courses;
