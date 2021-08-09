import React from 'react';
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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { getApiBaseUrl } from '../../uiHelper';

window.onerror = (error) => {
    console.log('error', error);
    return true;
};

let editor;
export default function AddCourse() {
    const [courseData, setCourseData] = React.useState({ chapters: [] });

    const [open, setOpen] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [currentChapter, setCurrentChapter] = React.useState('');
    const [courseIsSaving, setCourseIsSaving] = React.useState(false);
    const [isToastOpen, setIsToastOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleToastClose = () => {
        setIsToastOpen(false);
    };

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    React.useEffect(() => {
        try {
            editor = new EditorJS({
                holder: 'editorjs',
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

                setEditMode(false);
                setCurrentChapter('');
                editor.blocks.clear();
            })
            .catch((error) => {
                console.log('Saving failed: ', error);
            });
    };

    const addCourse = async () => {
        console.log('course data', courseData);
        if (courseData.chapters.length === 0 || !courseData.title || !courseData.description) {
            console.log('Can not add a course with 0 chapters or empty title or empty description');
            setIsToastOpen(true);
            return;
        }
        setOpen(true);
    };

    const handleCourseSave = async () => {
        console.log('course data', courseData);

        if (courseData.chapters.length === 0 || !courseData.title || !courseData.description) {
            console.log('Can not add a course with 0 chapters or empty title or empty description');
            setIsToastOpen(true);
            return;
        }

        setCourseIsSaving(true);
        const rawResponse = await fetch(`${getApiBaseUrl()}addCourse`, {
            method: 'POST',
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

    const editChapter = (chapterIndex) => {
        setEditMode(true);
        setCurrentChapter(chapterIndex);

        editor.render(courseData.chapters[chapterIndex].content);
    };

    const handleTitleChange = (e) => {
        setCourseData({ ...courseData, title: e.target.value });
    };

    const handleDescriptionChange = (e) => {
        setCourseData({ ...courseData, description: e.target.value });
    };

    return (
        <>
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
                            {`Write content for chapter ${
                                editMode ? currentChapter + 1 : courseData.chapters.length + 1
                            }`}
                        </h1>
                        {editMode && <div>Edit mode on</div>}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                saveChapter(editMode ? currentChapter : courseData.chapters.length)
                            }
                            style={{ maxWidth: '180px', marginTop: '10px' }}>
                            Save Chapter
                        </Button>
                        <div
                            id="editorjs"
                            style={{
                                padding: '10px',
                                border: '1px dashed lightgray',
                                marginTop: '10px'
                            }}>
                            Start writing and click on Save to save the chapter content locally
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={addCourse}
                            style={{ maxWidth: '180px', marginTop: '10px' }}>
                            Save Course
                        </Button>
                        <div>* Save course will save the course with chapters in database</div>
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
                        {'Do you want to save this course permanently?'}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {courseIsSaving ? (
                                <CircularProgress />
                            ) : (
                                `Make sure all your chapters are ready. Saving the course will keep the
                        course data along with chapter content in database.`
                            )}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            disabled={courseIsSaving}
                            onClick={handleCourseSave}
                            color="primary"
                            autoFocus>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
            <Snackbar
                style={{ top: '60px' }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={12000}
                open={isToastOpen}
                onClose={handleToastClose}
                key={'success toast'}>
                <Alert onClose={handleToastClose} severity={'error'}>
                    {'Can not add a course without chapters or title or descriptions'}
                </Alert>
            </Snackbar>
        </>
    );
}
