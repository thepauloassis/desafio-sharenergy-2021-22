import React, { useEffect, useState } from 'react';
import './style.css';

import { useTranslation } from 'react-i18next';

import axios from '../../services/axios';
import data from '../../data/dadosUsina.json';

import LineChartComponent from './LineChart';
import ChartSelectVariable from './ChartSelectVariable';
import ChartInfo from './ChartInfo';
import FormUpload from '../FormUpload';

import { calculateChartInfo } from '../../utils/chartCalculateInfo';

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { styled, useTheme } from '@mui/material/styles';

/* function componentDidMount() {
  throw new Error('Function not implemented.');
  console.log(1);
} */

interface IData {
  tempo_h: number;
  tensao_V: number;
  corrente_A: number;
  potencia_kW: number;
  temperatura_C: number;
}

const Chart = () => {
  const [t, i18n] = useTranslation();
  const theme = useTheme();
  const [variable, setVariable] = useState('tensao_V');
  const [lineColor, setLineColor] = useState(`blue`);
  const [radioColor, setRadioColor] = useState('info');

  //Chart description
  const [chartArray, setChartArray] = useState([0]);
  const [chartMedia, setChartMedia] = useState(0);
  const [chartModa, setChartModa] = useState(0);
  const [chartMediana, setChartMediana] = useState(0);
  const [chartVariancia, setChartVariancia] = useState(0);
  const [chartDesvioPadrao, setChartDesvioPadrao] = useState(0);
  const [chartMin, setChartMin] = useState(0);
  const [chartMax, setChartMax] = useState(0);

  useEffect(() => {
    handleChart(data, variable);
  }, []);

  const handleChart = (chartData: Array<IData>, chartVariable: string) => {
    const chartInfoData = calculateChartInfo(chartData, chartVariable);

    setChartMedia(chartInfoData.mean);
    setChartModa(chartInfoData.mode);
    setChartMediana(chartInfoData.median);
    setChartVariancia(chartInfoData.variance);
    setChartDesvioPadrao(chartInfoData.standardDeviation);
    setChartMin(chartInfoData.minimum);
    setChartMax(chartInfoData.maximum);

    setVariable(chartVariable);
  };

  const handleSelect = (e: any) => {
    handleChart(data, e.target.value);
    if (e.target.value === 'tensao_V') {
      setLineColor(`blue`);
    }
    if (e.target.value === 'corrente_A') {
      setLineColor('purple');
    }
    if (e.target.value === 'potencia_kW') {
      setLineColor('orange');
    }
    if (e.target.value === 'temperatura_C') {
      setLineColor('red');
    }
  };

  return (
    <>
      <Box component="div" mt={5} sx={{ textAlign: 'center' }}>
        <Paper elevation={8} sx={{ padding: '16px' }}>
          <Box component="div" sx={{ width: '100%' }}>
            <Box component="div">
              <LineChartComponent
                chartData={data}
                chartVariable={variable}
                chartLineColor={lineColor}
              />
            </Box>
            <Box
              component="div"
              mt={2}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ChartSelectVariable handleSelect={handleSelect} />
              <ChartInfo
                mean={chartMedia}
                mode={chartModa}
                median={chartMediana}
                variance={chartVariancia}
                standardDeviation={chartDesvioPadrao}
                minimum={chartMin}
                maximum={chartMax}
              />
            </Box>
          </Box>
        </Paper>
        <FormUpload />
      </Box>
      {/* <Button color="mycolors" variant="contained">
        {theme.palette.mycolors.main}
      </Button> */}
    </>
  );
};

export default Chart;
