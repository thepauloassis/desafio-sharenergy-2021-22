import { Router } from 'express';
import isAuthenticated from '../middlewares/isAuthenticated';

import ClientController from '../controllers/ClientController';

const clientsRoutes = Router();

const clientController = new ClientController();

clientsRoutes.get('/', isAuthenticated, clientController.index);
clientsRoutes.get('/:id', clientController.findById);
clientsRoutes.post('/', isAuthenticated, clientController.create);
clientsRoutes.put('/:id', clientController.updateOne);
clientsRoutes.delete('/:id', clientController.deleteOne);

export default clientsRoutes;
