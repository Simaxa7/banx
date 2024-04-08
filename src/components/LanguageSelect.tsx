import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import {useLanguage} from "../contex/LanguageContext";

const LanguageSelect: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const handleChange = (event: SelectChangeEvent<string>) => {
        setLanguage(event.target.value);
    };

    return (
        <Select
            value={language}
            onChange={handleChange}
            style={{ backgroundColor: '#bbb', color: '#fff', marginRight:'20px' }}
        >
            <MenuItem value="en-US">EN</MenuItem>
            <MenuItem value="lt-LT">LT</MenuItem>
            <MenuItem value="de-DE">DE</MenuItem>

        </Select>
    );
};

export default LanguageSelect;
