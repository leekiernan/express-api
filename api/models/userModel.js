const mongoose = require('mongoose')
mongoose.set('debug', true);

const isEmail = require('validator/lib/isEmail')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [isEmail, 'Please fill a valid email address'],
    required: "Required: a user's email address"
  },
  givenName: {
    type: String,
    required: "Required: in the UK this is the user's first name"
  },
  familyName: {
    type: String,
    required: "Required: in the UK this is the user's last name"
  },
  created: {
    type: Date,
    default: Date.now,
    required: "Required: the date and time the user was added"
  },
})


module.exports = mongoose.model('User', UserSchema)
