import { Router } from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/api/orphanages', upload.array('images'), OrphanagesController.create)
routes.get('/api/orphanages', OrphanagesController.index)
routes.get('/api/orphanages/:id', OrphanagesController.read)

export default routes;
