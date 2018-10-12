const mongoose = require('mongoose')
const express = require('express')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')

mongoose.set('debug', true)

const app = express()
const PORT = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// mongodb.connect('mongodb://db:27017/holidayextras', { useNewUrlParser: true })
mongoose.connect('mongodb://db:27017/holidayextras')
// .then(() => console.log('connect'))
// .catch( err => console.log('err', err))


const userRouter = require('./api/routes/userRouter')
userRouter(app)


module.exports = app.listen(PORT, () => {
  console.log('Your node js server is running on PORT:', PORT)
})
