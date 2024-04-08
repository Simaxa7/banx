const formatAmount = (amount: number, language: string): string => {
    const formatter = new Intl.NumberFormat(language, {
        style: 'decimal',
        minimumFractionDigits: 2,
    });
    console.log('formatter', formatter, typeof formatter)
    return formatter.format(amount);
};

export default formatAmount;