import React from 'react';
import TextField from '@mui/material/TextField';

interface PurposeTextFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | undefined;
}

const PurposeTextField: React.FC<PurposeTextFieldProps> = ({ value, onChange, error }) => {
    return (
        <TextField
            id="id-purposeTextField"
            multiline
            rows={4}
            label="purpose"
            name="purpose"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error}
            sx={{ minWidth: '300px', marginBottom: '16px', display: "flex" }}
        />
    );
}

export default PurposeTextField;
