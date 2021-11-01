import { Router } from 'express';
import clientsRoutes from './clients.routes';
import usersRoutes from './users.routes';
import uploadsRoutes from './uploads.routes';

const routes = Router();

routes.use('/clients', clientsRoutes);
routes.use('/users', usersRoutes);
routes.use('/uploads', uploadsRoutes);

export default routes;
