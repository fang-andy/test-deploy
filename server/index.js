const path = require('path');
const express = require('express');
const router = require('./routes/routes');
const { auth } = require('express-openid-connect');
require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER
};
const app = express();

const { PORT } = process.env;

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth(config));

app.use('/', router);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}!`)
}); 