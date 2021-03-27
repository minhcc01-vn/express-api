import mongoose from 'mongoose'

class Index {
  async connect() {
    try {
      await mongoose.connect('mongodb://localhost:27017/user', {
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
      console.log('Connect successfully!')
    } catch (error) {
      console.log('Connect fail!')
    }
    
  }
}

export default new Index()