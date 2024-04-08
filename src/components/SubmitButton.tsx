import React from "react";
import { Button } from "@mui/material";

interface SubmitButtonProps {
    defaultError: boolean;
    otherError: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ defaultError, otherError }) => {
    return (
        <Button
            variant="contained"
            color="success"
            disabled={defaultError || otherError}
            type="submit"
        >
            Submit
        </Button>
    );
}

export default SubmitButton;
