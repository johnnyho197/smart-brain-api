const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const db = require('./controllers/knex')

const port = process.env.PORT || 3000;

const app = express();

app.use(cors())

app.use(express.json()); 

app.get('/', (req, res)=> {
  res.send(db.users)
})
app.post('/signin', signin.handleSignin( db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt)})
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db)})
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(port, ()=> {
  console.log(`app is running on port ${port}`);
})
