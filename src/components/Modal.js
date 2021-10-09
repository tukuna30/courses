import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import './Modal.scss';

const Modal = ({ showModal, title, content, cancelHandler }) => {
    return (
        <Dialog
            className="modal"
            open={showModal}
            onClose={cancelHandler}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <div className="container">
                <div className="body">
                    <DialogTitle className="title" id="alert-dialog-title">
                        {title}
                    </DialogTitle>
                    <DialogContent
                        className="content"
                        style={{ display: 'flex', justifyContent: 'center' }}>
                        <DialogContentText id="alert-dialog-description">
                            {content}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className="action">
                        <Button className="primary-button" onClick={cancelHandler} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </div>
            </div>
        </Dialog>
    );
};

export default Modal;
