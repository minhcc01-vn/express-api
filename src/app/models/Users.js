import mongoose, { Schema } from 'mongoose';

const Users = mongoose.Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    },
    decks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Deck'
      }
    ]
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('user', Users);
