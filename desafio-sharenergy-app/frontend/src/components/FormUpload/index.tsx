import React, { useRef, useState } from 'react';
import './style.css';

import axios from '../../services/axios';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const FormUpload = () => {
  const [file, setFile] = useState<File>();

  const sendFile = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (file) {
      const dataForm = new FormData();
      dataForm.append('factory-data', file);

      await axios
        .post(`/uploads/factory`, dataForm, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          const data = res.data;
          console.log(data);
        });
    }

    console.log(file);
  };

  const handleChange = (e: React.FormEvent) => {
    const files = (e.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  return (
    <Box component="form" mt={5} sx={{ display: 'flex' }}>
      <TextField
        onChange={handleChange}
        type="file"
        sx={{ marginRight: '10px' }}
      />
      <Button onClick={sendFile} variant="outlined">
        Submit
      </Button>
    </Box>
  );
};

export default FormUpload;
