import React, {useEffect, useState} from "react";
import {useFormik} from 'formik';

import validationSchema from "../shemas/validationSchema";
import validateIban from "../helpers/validateIban";
import {iPayerAccount} from "../interfaces/iPayerAccount";
import checkFormHasErrors from "../helpers/checkFormHasErrors";
import SubmitButton from "./SubmitButton";
import FormSubmissionSnackbar from "./FormSubmissionSnackbar";
import PayeeTextField from "./PayeeTextField";
import PurposeTextField from "./PurposeTextField";
import PayeeAccountTextField from "./PayeeAccountTextField";
import AmountTextField from "./AmountTextField";
import PayerAccountTextField from "./PayerAccountTextField";

const BasicForm = (props: { payerAccountsData: iPayerAccount[]; }) => {

    const {payerAccountsData} = props

    const [customErrorAmount, setCustomErrorAmount] = useState('')
    const [formReadyForSubmission, setFormReadyForSubmission] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [customErrorPayeeAccountIsExist, setCustomErrorPayeeAccountIsExist] = useState("Invalid Payee Account IBAN")

    const {
        values: {
            amount,
            payeeAccount,
            purpose,
            payerAccount,
            payee,
        },
        resetForm,
        errors,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues: {
            amount: 1,
            payeeAccount: '',
            purpose: '',
            payerAccount:  payerAccountsData[0].iban, //client should have at least one iban
            payee: '',
        },
        onSubmit: values => {
            setFormReadyForSubmission(false);
            setFormSubmitted(true);
            setCustomErrorPayeeAccountIsExist("Invalid Payee Account IBAN")

            console.log("submit:", JSON.stringify(values, null, 2));
            resetForm()

        },
        validationSchema: validationSchema
    });

    useEffect(() => {
        const currentValue = Number(amount)
        const currentPayerAccount = payerAccountsData.filter(el => el.iban === payerAccount) // get automaticly
        const balance = currentPayerAccount[0].balance
        if (currentValue > balance) {
            setCustomErrorAmount(`Do not have enough money max value=${balance}`)
        } else {
            setCustomErrorAmount('')
        }

        if (!errors?.payeeAccount && payeeAccount.length === 20) {
            const fetchData = async () => {
                    const isExist = await validateIban(payeeAccount);
                    setCustomErrorPayeeAccountIsExist(isExist? '' : 'no IBAN');
                }
                fetchData();
        }
    }, [amount, errors, payeeAccount, payerAccountsData, payerAccount]);

    useEffect(()=>{
        const formHasErrors = checkFormHasErrors(...Object.values(errors), customErrorAmount, customErrorPayeeAccountIsExist)
        setFormReadyForSubmission(!formHasErrors);
    },[errors, customErrorAmount, customErrorPayeeAccountIsExist])

    const formHasErrors = checkFormHasErrors(...Object.values(errors), customErrorAmount, customErrorPayeeAccountIsExist)

    return (
        <>
            <form onSubmit={handleSubmit} style={{ display: 'flex', maxWidth: '480px', margin: '0 auto', flexDirection: 'column'}}>

                <PayerAccountTextField
                    payerAccountsData={payerAccountsData}
                    value={payerAccount}
                    onChange={handleChange}
                    error={errors.payerAccount}

                />

                <AmountTextField
                    value={amount}
                    onChange={handleChange}
                    error = {errors.amount ? errors.amount : customErrorAmount}
                />

                <PayeeAccountTextField
                    value={payeeAccount}
                    onChange={handleChange}
                    error = {errors.payeeAccount ? errors.payeeAccount : customErrorPayeeAccountIsExist}
                />

                <PurposeTextField
                    value={purpose}
                    onChange={handleChange}
                    error = {errors.purpose}
                />

                <PayeeTextField
                    value={payee}
                    onChange={handleChange}
                    error = {errors.payee}
                />

                <SubmitButton defaultError={formHasErrors} otherError={!formReadyForSubmission}/>

            </form>

            {formSubmitted && (
                <FormSubmissionSnackbar
                    open={formSubmitted}
                    onClose={() => setFormSubmitted(false)}
                />
            )}
        </>
    );
}

export default BasicForm