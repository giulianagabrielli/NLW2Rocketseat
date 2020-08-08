import express, { request, response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ClassesController();

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params:Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Peginação, filtros, ordenação

