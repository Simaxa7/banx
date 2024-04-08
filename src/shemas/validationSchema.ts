import * as yup from "yup";
import {number, string} from "yup";

const validationSchema = yup.object().shape({
    amount: number().min(0.01).required("amount is required"),
    payee: string()
        .max(70, 'payee must not exceed 70 characters')
        .required("payee is required"),
    payeeAccount: string().length(20).required("payeeAccount is required"),
    payerAccount: string().required('payerAccount is required'),
    purpose: string()
        .min(3, 'purpose must be at least 3 characters long')
        .max(135, 'purpose must not exceed 135 characters')
        .required('purpose is required'),
})

export default validationSchema;
