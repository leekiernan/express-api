const UserModel = require('../models/userModel')


class UserController {
  async list(req, res) {
    try {
      let users = await UserModel.find({})
      return res.json(users)
    } catch(err) {
      return res.send(err)
    }
  }

  async create(req, res) {
    try {
      let user = await new UserModel(req.body).save()
      return res.json(user)
    } catch (err) {
      return res.send(err)
    }
  }

  async read(req, res) {
    try {
      let user = await UserModel.findById(req.params.id)
      return res.json(user)
    } catch (err) {
      return res.send(err)
    }
  }

  async update(req, res)  {
    try {
      let user = await UserModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      return res.json(user)
    } catch (err) {
      return res.send(err)
    }
  }

  async delete(req, res) {
    try {
      await UserModel.remove({_id: req.params.id})
      return res.json({ message: 'User successfully deleted' })
    } catch (err) {
      return res.send(err)
    }

  }
}

module.exports = new UserController();
