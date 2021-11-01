import React from 'react';
import './style.css';

import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface Props {
  mean: number;
  mode: number;
  median: number;
  variance: number;
  standardDeviation: number;
  minimum: number;
  maximum: number;
}

const ChartInfo = (props: Props): JSX.Element => {
  const [t, i18n] = useTranslation();
  return (
    <Stack
      mt={2}
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Item>
        {t('meanVariable')}: {props.mean}
      </Item>
      <Item>
        {t('modeVariable')}: {props.mode}
      </Item>
      <Item>
        {t('medianVariable')}: {props.median}
      </Item>
      <Item>
        {t('varianceVariable')}: {props.variance}
      </Item>
      <Item>
        {t('standardDeviationVariable')}: {props.standardDeviation}
      </Item>
      <Item>
        {t('minimumVariable')}: {props.minimum}
      </Item>
      <Item>
        {t('maximumVariable')}: {props.maximum}
      </Item>
      <Item>
        {t('rangeVariable')}: {props.minimum} - {props.maximum}
      </Item>
    </Stack>
  );
};

export default ChartInfo;
