const checkFormHasErrors = (...args: string[]): boolean => {
    const filteredArgs: string[] = args.filter((arg: string) => arg.trim() !== '');

    return filteredArgs.length !== 0;
}

export default checkFormHasErrors;
