import React, { useState } from 'react';
import './style.css';

import { useTranslation } from 'react-i18next';

import validator from 'validator';

import axios from '../../../services/axios';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  refresh: boolean;
}

const FormRegisterCustomer = (props): JSX.Element => {
  const [t, i18n] = useTranslation();
  const [registerDialog, setRegisterDialog] = useState(false);

  //Register States
  const [clientNumber, setClientNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [observation, setObservation] = useState('');
  const [factoryId, setFactoryId] = useState('');
  const [participationPercentage, setParticipationPercentage] = useState('');

  const handleRegisterDialogOpen = () => {
    setRegisterDialog(true);
  };

  const handleRegisterDialogClose = () => {
    setRegisterDialog(false);
  };

  const handleCustomerSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    const client = {
      clientNumber: clientNumber,
      clientName: clientName,
      companyId: companyId,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      observation: observation,
      factory: {
        factoryId: factoryId,
        participationPercentage: participationPercentage,
      },
    };

    if (clientNumber === '') {
      toast.error('Número do Cliente é obrigatório!');
      formErrors = true;
    }

    if (clientName === '') {
      toast.error('Nome do Cliente é obrigatório!');
      formErrors = true;
    }

    if (email === '') {
      toast.error('E-mail é obrigatório!');
      formErrors = true;
    }

    if (factoryId === '') {
      toast.error('ID da Usina é obrigatório!');
      formErrors = true;
    }

    if (participationPercentage === '') {
      toast.error('Percentual de Participação é obrigatório!');
      formErrors = true;
    }

    if (clientName.length < 3 || clientName.length > 255) {
      toast.error('Nome precisa ter entre 3 e 255 caracteres');
      formErrors = true;
    }

    if (!validator.isEmail(email)) {
      toast.error('E-mail inválido');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      await axios.post(`/clients`, client);

      props.refresh();
      toast.success('Customer successfully registered!');
      setRegisterDialog(false);
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <Button
        className="button__add"
        onClick={handleRegisterDialogOpen}
        mr={2}
        variant="contained"
        startIcon={<AddIcon />}
        style={{
          background: '#1ba2a1',
          color: '#fff',
        }}
      >
        {t('datatableButtonAdd')}
      </Button>

      <Dialog
        fullScreen
        open={registerDialog}
        onClose={handleRegisterDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AppBar
          sx={{ position: 'relative' }}
          style={{ background: '#1ba2a1', color: '#fff' }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleRegisterDialogClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Cadastrar Cliente
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCustomerSubmit}>
              Salvar
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box
              component="form"
              sx={{
                display: 'block',
                justifyContent: 'center',
                '& .MuiTextField-root': {
                  m: 2,
                  p: 2,
                  width: '25rem',
                },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleCustomerSubmit}
            >
              <TextField
                sx={{ mr: 2, flex: 1 }}
                required
                autoFocus
                margin="normal"
                id="customerNumber"
                label="Número do Cliente"
                type="text"
                variant="outlined"
                value={clientNumber}
                onChange={(e) => setClientNumber(e.target.value)}
              />
              <TextField
                sx={{ mr: 2, flex: 1 }}
                required
                margin="dense"
                id="customerName"
                label="Nome do Cliente"
                type="text"
                variant="outlined"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <TextField
                sx={{ mr: 2, flex: 1 }}
                margin="dense"
                id="companyId"
                label="Código do Cliente"
                type="text"
                variant="outlined"
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
              />
              <TextField
                required
                sx={{ mr: 2, flex: 1 }}
                margin="dense"
                id="email"
                label="E-mail"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                sx={{ mr: 2, flex: 1 }}
                margin="dense"
                id="phoneNumber"
                label="Telefone"
                type="text"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField
                sx={{ mr: 2, flex: 1 }}
                margin="dense"
                id="address"
                label="Endereço"
                type="text"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                sx={{ mr: 2, flex: 1 }}
                margin="dense"
                id="observation"
                label="Observações"
                type="text"
                variant="outlined"
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
              />
              <TextField
                required
                sx={{ mr: 2, flex: 1 }}
                margin="dense"
                id="factoryId"
                label="ID da Usina"
                type="text"
                variant="outlined"
                value={factoryId}
                onChange={(e) => setFactoryId(e.target.value)}
              />
              <TextField
                required
                sx={{ mr: 2, flex: 1 }}
                margin="dense"
                id="participationPercentage"
                label="Percentual de Participação"
                type="text"
                variant="outlined"
                value={participationPercentage}
                onChange={(e) => setParticipationPercentage(e.target.value)}
              />
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormRegisterCustomer;
