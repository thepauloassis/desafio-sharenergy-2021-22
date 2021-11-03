import React, { SyntheticEvent, useState } from 'react';
import './style.css';

import axios from '../../../services/axios';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCustomer = (props) => {
  const [editDialog, setEditDialog] = useState(false);
  //Customer States
  const [editId, setEditId] = useState('');
  const [clientNumber, setClientNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [observation, setObservation] = useState('');
  const [factoryId, setFactoryId] = useState('');
  const [participationPercentage, setParticipationPercentage] = useState('');

  const handleEditDialog = () => {
    setEditDialog(!editDialog);
  };

  const handleEdit = async (e: SyntheticEvent, id: number) => {
    e.preventDefault();

    setEditDialog(!editDialog);

    const { data } = await axios.get(`/clients/${id}`);

    setEditId(id);

    setClientNumber(data.clientNumber);
    setClientName(data.clientName);
    setCompanyId(data.companyId);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);
    setAddress(data.address);
    setObservation(data.observation);
    setFactoryId(data.factory.factoryId);
    setParticipationPercentage(data.factory.participationPercentage);
  };

  const handleConfirmEdit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.put(`/clients/${editId}`, {
      clientNumber,
      clientName,
      companyId,
      email,
      phoneNumber,
      address,
      observation,
      factory: {
        factoryId,
        participationPercentage,
      },
    });

    props.refresh();
    toast.success('Customer successfully edited!');
    setEditDialog(!editDialog);
  };

  return (
    <>
      <IconButton
        onClick={(e) => handleEdit(e, props.clientId)}
        aria-label="Edit Button"
        color="primary"
      >
        <Tooltip title="Edit">
          <EditIcon fontSize="small" />
        </Tooltip>
      </IconButton>
      <Dialog
        open={editDialog}
        onClose={handleEditDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Edit Customer'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              sx={{ mr: 2, flex: 1 }}
              required
              autoFocus
              margin="dense"
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
              sx={{ mr: 2, flex: 1 }}
              margin="dense"
              id="email"
              label="E-mail"
              type="text"
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            aria-label="Cancel"
            variant="outlined"
            onClick={handleEditDialog}
          >
            Cancelar
          </Button>
          <Button
            aria-label="Edit"
            variant="outlined"
            onClick={(e) => handleConfirmEdit(e)}
            autoFocus
            color="success"
          >
            Editar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditCustomer;
