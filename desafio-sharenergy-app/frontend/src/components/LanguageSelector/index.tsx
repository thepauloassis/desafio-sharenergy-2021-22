import React from 'react';
import './style.css';

import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState('pt-BR');

  const changeLanguage = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <>
      <Box mr={5} sx={{ width: 80 }}>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="languageSelect">Language</InputLabel>
          <Select
            labelId="languageSelect"
            id="languageSelect"
            value={language}
            onChange={changeLanguage}
            sx={{ color: 'white' }}
          >
            <MenuItem defaultChecked value="pt-BR">
              pt-BR
            </MenuItem>
            <MenuItem value="en">EN</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default LanguageSelector;
