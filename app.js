const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const todosRoutes = require('./routes/todos')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/todos', todosRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client1/build'))
  
    app.get('*', (req, res) => {
      res.sendFile(
        path.resolve(
          __dirname, 'client1', 'build', 'index.html'
        )
      )
    })
  }
  

module.exports = app