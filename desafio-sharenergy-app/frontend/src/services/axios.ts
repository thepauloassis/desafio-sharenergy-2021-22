import axios from 'axios';

const token = localStorage.getItem('DesafioSharenergy:JWT_TOKEN');

export default axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    authorization: 'Bearer ' + token,
  },
});
