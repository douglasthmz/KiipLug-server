const routes = require('express').Router();
const PackController = require('./controllers/PackController');

routes.get('/', PackController.index)
routes.post('/', PackController.store)
routes.put('/:id', PackController.update)
routes.delete('/:id', PackController.remove)

module.exports = routes;

