/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/users', 'UsersController.index')
Route.post('/users', 'UsersController.store')
Route.get('/users/:id', 'UsersController.show')
Route.put('/users/:id', 'UsersController.update')
Route.delete('/users/:id', 'UsersController.destroy')

Route.get('/documents', 'DocumentsController.index')
Route.post('/documents', 'DocumentsController.store')
Route.get('/documents/:id', 'DocumentsController.show')
Route.put('/documents/:id', 'DocumentsController.update')
Route.delete('/documents/:id', 'DocumentsController.destroy')
Route.post('files', 'FilesController.store')
Route.get('files/:id', 'FilesController.show')
Route.get('download/:id', 'FilesController.download')