import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import fs from 'fs';
import path from 'path';
import moment from 'moment';
import isAuthenticated from '../middlewares/isAuthenticated';

const upload = multer(multerConfig);

const uploadsRoutes = Router();

uploadsRoutes.post(
  '/factory',
  upload.single('factory-data'),
  async (req, res) => {
    return res.json({ message: 'File uploaded' });
  },
);

uploadsRoutes.get('/factory', async (req, res) => {
  const directoryPath = path.join(__dirname, '..', 'uploads', 'factory-data');
  let obj;

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    const filesReverse = files.reverse();

    fs.readFile(directoryPath + '/' + filesReverse[0], handleFile);

    function handleFile(err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      return res.send(obj);
    }

    /*

    const unixTimestamp = Number(filesReverse[0].split('-', 1));

    const filenameDate = new Date(unixTimestamp);

    const date = moment.utc(filenameDate).local();
    console.log('date', date.format('DD/MM/YYYY HH:mm:ss'));

    const time = filenameDate.toLocaleString();

    console.log(time);

    return res.json({ date: filenameDate }); */
  });
});

export default uploadsRoutes;
