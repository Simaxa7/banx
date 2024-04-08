import React from 'react';
import { TextField, MenuItem, Typography, Grid } from '@mui/material';


interface PayerAccountTextFieldProps {
    payerAccountsData: {
        iban: string;
        balance: number;
        id:string;
    }[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | undefined;
}

const PayerAccountTextField: React.FC<PayerAccountTextFieldProps> = ({
     payerAccountsData,
     value,
     onChange,
     error,
 }) => {
    return (
        <TextField
            id="payerAccount"
            select
            label="payerAccount"
            name="payerAccount"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error}
            sx={{minWidth: '300px', marginBottom: '16px', display: 'flex'}}
        >
            {payerAccountsData.map((option) => (
                <MenuItem key={option.id} value={option.iban}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Typography variant="body1">{option.iban}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{option.balance}</Typography>
                        </Grid>
                    </Grid>
                </MenuItem>
            ))}
        </TextField>
    );
};

export default PayerAccountTextField;
