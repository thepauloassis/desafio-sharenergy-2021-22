import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', 'uploads', 'factory-data'),
    filename(request, file, callback) {
      const date = Date.now();

      const fileName = `${date}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
