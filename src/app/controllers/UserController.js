import Users from '../models/Users'
import Decks from '../models/Decks'

class UserController {
  // [GET /users]
  index(req, res, next) {
    Users.find({})
      .then(user => res.json(user))
      .catch(next)
  }

  // [POST /users]
  create(req, res, next) {
    var newUser = req.body
    Users.create([newUser])
      .then(user => res.json(user))
      .catch(err => console.log('error: ', err))
  }

  getUserById(req, res, next) {
    const { userId } = req.params
    Users.findById({_id: userId})
      .then(user => res.json(user))
      .catch(next)
  }

  destroy(req, res, next) {
    const { userId } = req.params
    Users.deleteOne({_id: userId})
      .then(user => res.json(user))
      .catch(next)
  }

  // [ PUT ]
  replace(req, res, next) {
    const { userId } = req.params
    const newUser = req.body
    Users.replaceOne({_id: userId}, newUser)
      .then(user => res.json(user))
      .catch(next)
  }
  
  // [ PATCH ]
  update(req, res, next) {
    const { userId } = req.params
    const updateUser = req.body
    Users.updateOne({_id: userId}, updateUser)
      .then(user => res.json(user))
      .catch(next)
  }


  // [GET /:userId/decks]
  async getUserDecks(req, res, next) {
    const { userId } = req.params
  
    // Get user
    const user = await Users.findById(userId).populate('decks')

    res.json(user.decks)
  }

  // [POST /:userId/decks]
  async newUserDeck(req, res, next) {
    const { userId } = req.params
    const deck = new Decks(req.body)
    
    const user = await Users.findById(userId)

    deck.owner = user

    await deck.save()

    user.decks.push(deck._id)
    await user.save()

    res.json({deck})
  }

}

export default new UserController();
