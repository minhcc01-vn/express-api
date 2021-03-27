import { Router } from 'express';
const router = new Router();

import userController from '../app/controllers/UserController'

import { validateParams, schemas } from '../middelware/validateParams'

// Add routes
router.route('/')
  .get(userController.index)
  .post(userController.create)
  
router.route('/:userId')
  .get(validateParams(schemas.idSchema, 'userId') ,userController.getUserById)
  .delete(userController.destroy)
  .put(userController.replace)
  .patch(userController.update)

router.route('/:userId/decks')
  .get(userController.getUserDecks)
  .post(userController.newUserDeck)

export default router
