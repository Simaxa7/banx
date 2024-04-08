const validateIban = async (value: string): Promise<boolean> => {
    try {
        const isRealRequest: boolean = true;

        let data: { iban: string; valid: boolean;  } = { iban: '', valid: false };

        // TODO: here you can switch real or mock request
        if (isRealRequest) {
            const response: Response = await fetch(`https://matavi.eu/validate/?iban=${value}`);
            data = await response.json();
        } else {
            data = { iban: "LT307300010172619164", valid: true };
        }

        if( value === data?.iban){
            return data?.valid;
        } else {
            return false
        }

    } catch (error) {
        console.error('Error:', error);
        return false;
    }
};

export default validateIban
