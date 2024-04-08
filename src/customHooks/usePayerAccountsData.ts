import { useState, useEffect } from "react";
import {iPayerAccount} from "../interfaces/iPayerAccount";

const usePayerAccountsData = () => {
    const [payerAccountsData, setPayerAccountsData] = useState<iPayerAccount[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchPayerAccountsData = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await new Promise<iPayerAccount[]>((resolve) => {
                setTimeout(() => {
                    const data: iPayerAccount[] = [
                        {
                            iban: "LT307300010172619160",
                            id: "1",
                            balance: 1000.12
                        },
                        {
                            iban: "LT307300010172619161",
                            id: "2",
                            balance: 2.43
                        },
                        {
                            iban: "LT307300010172619162",
                            id: "3",
                            balance: -5.87
                        }
                    ];
                    resolve(data);
                }, 1000);
            });

            setPayerAccountsData(response);
        } catch (error) {
            console.error("Error fetching payer accounts data:", error);
            setError(error instanceof Error ? error : new Error("An error occurred while fetching payer accounts data"));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPayerAccountsData();
    }, []);

    return { payerAccountsData, loading, error, refetchPayerAccountsData: fetchPayerAccountsData };
};

export default usePayerAccountsData;
