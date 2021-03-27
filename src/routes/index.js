import userRoute from './user'

function route(app) {
  app.use('/users', userRoute)
  // app.use('/', (req, res) => res.send('Hi'))
}

export default route