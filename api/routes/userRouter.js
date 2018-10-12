const usrCtrl = require('../controllers/userController')

const userRouter = (app) => {
  app.route('/users')
    .get(usrCtrl.list)
    .post(usrCtrl.create)

  app.route('/users/:id')
    .get(usrCtrl.read)
    .put(usrCtrl.update)
    .delete(usrCtrl.delete)
}

module.exports = userRouter
