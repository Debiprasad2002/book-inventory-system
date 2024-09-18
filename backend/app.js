const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const sequelize = require('./config/dbConfig');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', bookRoutes);

sequelize.sync().then(() => {
  console.log('Database connected and synced');
}).catch(err => {
  console.error('Database connection failed:', err);
});

module.exports = app;
