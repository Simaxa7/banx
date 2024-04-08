import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface FormSubmissionSnackbarProps {
    open: boolean;
    onClose: () => void;
}

const FormSubmissionSnackbar: React.FC<FormSubmissionSnackbarProps> = ({ open, onClose }) => {
    return (
        <Snackbar
            open={open}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Alert onClose={onClose} severity="success">
                Form submitted and cleared successfully!
            </Alert>
        </Snackbar>
    );
}

export default FormSubmissionSnackbar;
