import mongoose, { Schema } from 'mongoose'
import Users from './Users'

const DeskSchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  total: {
    type: Number,
    default: 0
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: Users
  }
})

export default mongoose.model('Deck', DeskSchema)
