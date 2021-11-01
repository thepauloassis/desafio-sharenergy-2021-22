import React from 'react';
import './style.css';

import { useTranslation } from 'react-i18next';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

interface Props {
  handleSelect: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
}

const chartSelectVariable = (props: Props): JSX.Element => {
  const [t, i18n] = useTranslation();
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{t('selectChartVariable')}</FormLabel>
      <RadioGroup
        onChange={props.handleSelect}
        row
        aria-label="graphic"
        defaultValue="tensao_V"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="tensao_V"
          control={<Radio color="info" />}
          label={t('voltageVariable')}
        />
        <FormControlLabel
          value="corrente_A"
          control={<Radio color="secondary" />}
          label={t('currentVariable')}
        />
        <FormControlLabel
          value="potencia_kW"
          control={<Radio color="warning" />}
          label={t('powerVariable')}
        />
        <FormControlLabel
          value="temperatura_C"
          control={<Radio color="error" />}
          label={t('temperatureVariable')}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default chartSelectVariable;
