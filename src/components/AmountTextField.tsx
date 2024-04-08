import React from 'react';
import TextField from '@mui/material/TextField';

interface AmountTextFieldProps {
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | undefined;
}


const AmountTextField: React.FC<AmountTextFieldProps> = ({ value, onChange, error }) => {
    return (
        <TextField
            id="id-amountTextField"
            label="amount"
            name="amount"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error}
            sx={{ minWidth: '300px', marginBottom: '16px', display: "flex" }}
        />
    );
}

export default AmountTextField;
