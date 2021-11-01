import React from 'react';
import './style.css';

import { useTranslation } from 'react-i18next';

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

interface IData {
  tempo_h: number;
  tensao_V: number;
  corrente_A: number;
  potencia_kW: number;
  temperatura_C: number;
}

interface Props {
  chartData: Array<IData>;
  chartVariable: string;
  chartLineColor: string;
}

const LineChartComponent = (props: Props) => {
  const [t, i18n] = useTranslation();
  return (
    <Box component="div">
      <h2>{t('chartName')}</h2>

      <Box component="div" mt={2}>
        <ResponsiveContainer width="100%" height="100%" aspect={3}>
          <LineChart
            width={500}
            height={300}
            data={props.chartData}
            margin={{ right: 0 }}
          >
            <CartesianGrid />
            <XAxis dataKey="tempo_h" interval="preserveStartEnd" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Line
              dataKey={props.chartVariable}
              stroke={props.chartLineColor}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default LineChartComponent;
