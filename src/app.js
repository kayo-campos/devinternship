const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./database');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection working!');
    app.listen(3000);
  })
  .catch(err => {
    console.error('Unable to conecct: ', err);
  })
