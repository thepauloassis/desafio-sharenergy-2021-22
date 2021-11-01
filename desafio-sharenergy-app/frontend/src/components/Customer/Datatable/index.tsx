import React, { useEffect, useState } from 'react';
import './style.css';

import { useTranslation } from 'react-i18next';

import axios from '../../../services/axios';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FormRegisterCustomer from '../Add';
import EditCustomer from '../Edit';
import DeleteCustomer from '../Delete';

import data from '../../../data/dadosUsina.json';

import MUIDataTable from 'mui-datatables';

const CustomerTable = () => {
  const [t, i18n] = useTranslation();
  const [clients, setClients] = useState([] as any);
  const [refreshPage, setRefreshPage] = useState(false);
  const [token, setToken] = useState();

  //CustomerData
  const [customersData, setCustomersData] = useState('');
  const [totalCustomers, setTotalCustomers] = useState('');
  const [totalLucro, setTotalLucro] = useState('');

  useEffect(() => {
    const getData = async () => {
      await axios.get(`/clients`).then((res) => {
        setClients(res.data);
      });
      console.log(clients);
    };

    getData();
  }, [refreshPage]);

  const handleRefresh = () => {
    setRefreshPage(!refreshPage);
  };

  const calculateClient = (clientPercentage: number) => {
    const deltaT = data[1].tempo_h - data[0].tempo_h;

    const potenciaArray = data.map((data) => data.potencia_kW);

    const kwSum = potenciaArray.reduce((acc, potencia) => acc + potencia);

    const deltaE = deltaT * kwSum;

    const energiaValor = 0.95;

    const receitaDiaria = deltaE * 0.95;

    const lucroCliente = (clientPercentage / 100) * receitaDiaria;

    const formatedLucroClient = lucroCliente.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatedLucroClient;
  };

  const columns = [
    t('datatableClientNumber'),
    t('datatableClientName'),
    t('datatableUsinaId'),
    t('datatableParticipationPercentage'),
    t('datatableDailyProfit'),
    {
      name: 'actions',
      label: t('datatableActions'),
      options: {
        filter: false,
        sort: false,
      },
    },
  ];

  const dataTable = clients.map((client) => [
    client.clientNumber,
    client.clientName,
    client.factory.factoryId,
    client.factory.participationPercentage,
    calculateClient(client.factory.participationPercentage),
    <>
      <EditCustomer refresh={handleRefresh} clientId={client._id} />
      <DeleteCustomer refresh={handleRefresh} clientId={client._id} />
    </>,
  ]);

  const options = {
    filterType: 'dropdown',
    selectableRows: 'none',
    responsive: 'scroll',
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 15, 25, 50, 100],
    searchPlaceholder: t('datatableButtonSearch'),
  };

  return (
    <MUIDataTable
      title={
        <Box
          component="div"
          sx={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <Typography variant="h5" gutterBottom component="div">
            {t('datatableTitle')}
          </Typography>
          <FormRegisterCustomer refresh={handleRefresh} />
        </Box>
      }
      data={dataTable}
      columns={columns}
      options={options}
    />
  );
};

export default CustomerTable;
