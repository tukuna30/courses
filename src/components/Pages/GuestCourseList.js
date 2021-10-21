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
import { getApiBaseUrl } from '../../uiHelper';

const GuestCourses = ({}) => {
    const [courses, setGuestCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true);
        fetch(`${getApiBaseUrl()}guest_courses`, {
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
                    setGuestCourses(response.courses);
                    setIsLoading(false);
                }, 2000);
            })
            .catch((error) => console.log(error));
    }, []);

    const paidGuestCourses = [
        {
            name: 'Web apps with JRNM',
            description: 'Build modern web apps using JavaScript, React, NodeJS and MongoDB',
            isPaid: true
        }
    ];

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
                    ? [...courses, ...paidGuestCourses].map((course) => (
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
                                          <Link to={`/guest_course_details/${course._id}`}>
                                              Start course
                                          </Link>
                                      )}
                                  </Button>
                              </CardActions>
                          </Card>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default GuestCourses;
