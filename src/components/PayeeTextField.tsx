import React from 'react';
import TextField from '@mui/material/TextField';

interface PayeeTextFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | undefined;
}

const PayeeTextField: React.FC<PayeeTextFieldProps> = ({ value, onChange, error }) => {
    return (
        <TextField
            id="id-payeeTextField"
            label="payee"
            name="payee"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error}
            sx={{ minWidth: '300px', marginBottom: '16px', display: 'flex' }}
        />
    );
}

export default PayeeTextField;
