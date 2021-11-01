import React, { useState } from 'react';
import './style.css';

import axios from '../../../services/axios';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteCustomer = (props) => {
  const [customerDeleteId, setCustomerDeleteId] = useState();
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleDeleteDialog = () => {
    setDeleteDialog(!deleteDialog);
  };

  const handleDelete = async (e: Event, id: string) => {
    e.preventDefault();

    setCustomerDeleteId(id);
    setDeleteDialog(true);
  };

  const handleConfirmDelete = async (e: Event) => {
    try {
      await axios.delete(`/clients/${customerDeleteId}`);
      toast.success('Customer successfully deleted!');
      props.refresh();
    } catch (err) {
      console.log(err);
    }
    setDeleteDialog(false);
  };

  return (
    <>
      <IconButton
        onClick={(e) => handleDelete(e, props.clientId)}
        aria-label="Delete Button"
        color="error"
      >
        <Tooltip title="Delete">
          <DeleteIcon fontSize="small" />
        </Tooltip>
      </IconButton>
      <Dialog
        open={deleteDialog}
        onClose={handleDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you really sure you want to delete this register?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action will delete the specified customer and cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            aria-label="Cancel"
            variant="outlined"
            onClick={handleDeleteDialog}
          >
            Cancel
          </Button>
          <Button
            aria-label="Delete"
            variant="outlined"
            onClick={(e) => handleConfirmDelete(e)}
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteCustomer;
