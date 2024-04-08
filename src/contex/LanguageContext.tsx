import React, { useState } from 'react';
import { createContext, ReactNode } from 'react';

interface LanguageContextProps {
    language: string;
    setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
    language: '',
    setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<string>('');

    const handleSetLanguage = (lang: string) => {
        localStorage.setItem('banx-language', lang);
        setLanguage(lang);
    };

    useState(() => {
        const storedLanguage = localStorage.getItem('banx-language');
        if (!storedLanguage) {
            const defaultLanguage = 'en-US';
            localStorage.setItem('banx-language', defaultLanguage);
            setLanguage(defaultLanguage);
        } else {
            setLanguage(storedLanguage);
        }
    });

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => React.useContext(LanguageContext);
