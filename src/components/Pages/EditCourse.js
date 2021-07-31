import React, { useState, useEffect } from 'react';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import InlineCode from '@editorjs/inline-code';
import Code from '@editorjs/code';
import EditorJS from '@editorjs/editorjs';
import SimpleImage from '@editorjs/simple-image';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams, useHistory } from 'react-router-dom';

window.onerror = (error) => {
    console.log('error', error);
    return true;
};

let editor;
export default function EditCourse() {
    const { id } = useParams();

    const [courseData, setCourseData] = React.useState({ chapters: [] });
    const [isLoading, setIsLoading] = useState(false);

    const [open, setOpen] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [currentChapter, setCurrentChapter] = React.useState('');
    const [courseIsSaving, setCourseIsSaving] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        try {
            editor = new EditorJS({
                holder: 'editorjs-edit',
                tools: {
                    header: Header,
                    list: List,
                    inlineCode: InlineCode,
                    image: SimpleImage,
                    code: Code
                }
            });
            editor.isReady.then(() => {
                editor.caret.focus(true);
            });
        } catch (er) {
            console.log(er);
        }
    }, []);

    const saveChapter = (chapterId) => {
        editor
            .save()
            .then((outputData) => {
                console.log('Article data: ', outputData);
                const _chapters = courseData.chapters;
                _chapters[chapterId] = { content: outputData };
                setCourseData({ ...courseData, chapters: [..._chapters] });

                setCurrentChapter('');
                editor.blocks.clear();
            })
            .catch((error) => {
                console.log('Saving failed: ', error);
            });
    };

    const editCourse = async () => {
        console.log('course data', courseData);
        setOpen(true);
    };

    const handleCourseUpdate = async () => {
        console.log('course data', courseData);

        if (courseData.chapters.length === 0 || !courseData.title || !courseData.description) {
            console.log('Can not add a course with 0 chapters or empty title or empty description');
            return;
        }

        setCourseIsSaving(true);
        const rawResponse = await fetch(`http://localhost:5001/updateCourse?id=${id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(courseData)
        });

        if (rawResponse.ok) {
            console.log('adding new course is successful');
            setOpen(false);
            setCourseIsSaving(false);
        }
    };

    useEffect(async () => {
        try {
            setIsLoading(true);
            const rawRsponse = await fetch(`http://localhost:5001/course/${id}`, {
                method: 'GET',
                credentials: 'include'
            });

            if (!rawRsponse.ok) {
                if (rawRsponse.status === 401);
                setTimeout(() => {
                    localStorage.removeItem('isUserLoggedIn');
                    history.push('/login');
                }, 1500);

                return;
            }
            const jsonResponse = await rawRsponse.json();
            console.log('course', jsonResponse.course);
            setCourseData(jsonResponse.course);
            setIsLoading(false);
        } catch (_error) {
            console.log('error', _error.message);
        }
    }, []);

    const editChapter = (chapterIndex) => {
        setCurrentChapter(chapterIndex);
        console.log('content', courseData.chapters[chapterIndex]);
        editor.render(courseData.chapters[chapterIndex].content);
    };

    const handleTitleChange = (e) => {
        setCourseData({ ...courseData, title: e.target.value });
    };

    const handleDescriptionChange = (e) => {
        setCourseData({ ...courseData, description: e.target.value });
    };

    return (
        <Grid containter direction="row" style={{ display: 'flex' }}>
            <Grid container spacing={3} direction="row" style={{ padding: '20px' }}>
                <form Validate>
                    <FormControl style={{ padding: '20px' }}>
                        <div>
                            <TextField
                                error={!courseData.title}
                                style={{ width: '50vw' }}
                                value={courseData.title}
                                id="title"
                                label="Title"
                                required
                                placeholder="Course title"
                                variant="filled"
                                onChange={handleTitleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                style={{ width: '50vw' }}
                                error={!courseData.description}
                                label="Description"
                                id="description"
                                value={courseData.description}
                                placeholder="Course description"
                                required
                                variant="filled"
                                onChange={handleDescriptionChange}
                            />
                        </div>
                    </FormControl>
                </form>
                <Grid item xs={6}>
                    <h1 style={{ display: 'inline-block' }}>
                        {`Edit content for chapter ${currentChapter + 1}`}
                    </h1>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => saveChapter(currentChapter)}
                        style={{ maxWidth: '180px', marginTop: '10px' }}>
                        Save Chapter
                    </Button>
                    <div id="editorjs-edit">
                        Start editing and click on Save to save the chapter content locally
                    </div>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={editCourse}
                        style={{ maxWidth: '180px', marginTop: '10px' }}>
                        update Course
                    </Button>
                    <div>* Update course will update the course with chapters in database</div>
                </Grid>
            </Grid>

            {courseData.chapters.length ? (
                <Grid container spacing={3} direction="column" style={{ padding: '20px' }}>
                    <div>Edit Chapters</div>
                    <ul>
                        {courseData.chapters.map((chapter, index) => {
                            return (
                                <li>
                                    <span>Chapter {index + 1}</span>
                                    <button
                                        onClick={() => {
                                            editChapter(index);
                                        }}>
                                        Edit
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </Grid>
            ) : null}

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {'Do you want to update this course?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {courseIsSaving ? (
                            <CircularProgress />
                        ) : (
                            `Make sure all your chapters are ready. Updating the course will keep the
                        course data along with chapter content updated in database.`
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        disabled={courseIsSaving}
                        onClick={handleCourseUpdate}
                        color="primary"
                        autoFocus>
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}
