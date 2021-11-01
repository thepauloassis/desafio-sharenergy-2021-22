import axios from '../axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getAllCustomers = async () => {
  await axios.get(`/clients`).then((res) => {
    const clients = res.data;
    console.log(clients);
  });
};

export const createCustomer = async (client) => {
  try {
    await axios.post(`/clients`, client);
    toast.success('Customer successfully registered!');
  } catch (err) {
    console.log(err.response.data.message.message);
    toast.error(err.response.data.message.message);
  }
};
