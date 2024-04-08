import React from 'react';
import TextField from '@mui/material/TextField';

interface PayeeAccountTextFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | undefined;
}

const PayeeAccountTextField: React.FC<PayeeAccountTextFieldProps> = ({ value, onChange, error }) => {
    return (
        <TextField
            id="id-payeeAccountTextField"
            label="payeeAccount"
            name="payeeAccount"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error}
            sx={{ minWidth: '300px', marginBottom: '16px', display: "flex" }}
        />
    );
}

export default PayeeAccountTextField;
