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
const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

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

    return (
        <div className="list">
            <h1> All availalbe courses </h1>
            {isLoading && <CircularProgress />}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {courses.map((course) => (
                    <Card
                        key={course.id}
                        style={{ minWidth: '300px', margin: '10px', padding: '10px' }}>
                        <CardActionArea>
                            {/*  <CardMedia
                                component="img"
                                alt="oops"
                                height="50"
                                width="80"
                                image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"



                            />{course.imageUrl} <CardMedia />
 */}


                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h5">
                                    {course.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {course.description}
                                </Typography>



                                {/*  <img
                                    style={{ width: '40px', height: 'auto' }}
                                    src={course.imageUrl}></img>
 */}                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to={`/details/${course.id}`}>Start course</Link>
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Courses;
