import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const PaymentDescriptionSection: React.FC = () => {
    return (
        <>
            <Typography variant="h4" marginTop={4}>Payment form</Typography>
            <Typography variant="body1">Create a payment form</Typography>
            <Typography variant="body1">Create a payment form using React and TypeScript by choosing Vite.js/Next.js or some other tooling/framework.</Typography>
            <Typography variant="body1">It is preferable to take UI components from Ant Design/Material-UI.</Typography>
            <Typography variant="body1">For forms, use Formik/React Hook Form and the appropriate validation library.</Typography>
            <Typography variant="h5">Form consists of:</Typography>

            <List>
                <ListItem>
                    <ListItemText
                        primary="amount (mandatory | number | min 0.01 | max by account balance)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="payeeAccount (mandatory | string | *endpoint)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="purpose (mandatory | string | min 3 | max 135)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="payerAccount (mandatory | string)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={
                            <span>
                                payee (mandatory | string | max 70
                                <Typography component="span" variant="body2">** display options with balance</Typography>
                            </span>
                        }
                    />
                </ListItem>
            </List>

            <Typography variant="body1">*IBAN validation endpoint: GET https://matavi.eu/validate?iban=LT307300010172619164</Typography>
            <Typography variant="body1">Response: <code>"iban":"LT307300010172619164","valid":true </code></Typography>
        </>
    );
};

export default PaymentDescriptionSection;
