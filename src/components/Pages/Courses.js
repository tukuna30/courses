/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

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
        <div>
            <h1> Quiz list </h1>
            {isLoading && <CircularProgress />}
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <Link to={`/details/${course.id}`}>{course.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
