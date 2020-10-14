import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.post('/api/orphanages', OrphanagesController.create)
routes.get('/api/orphanages', OrphanagesController.index)
routes.get('/api/orphanages/:id', OrphanagesController.read)

export default routes;
