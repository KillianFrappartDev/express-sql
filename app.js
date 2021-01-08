require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Local imports
const sequelize = require('./utils/config');
const routes = require('./routes');

// Express Config
const app = express();
app.use(cors());
app.use(express.json());

// Registered Routes
app.use('/api', routes);

// Error Handling Middleware
app.use((error, req, res, next) => {
  console.log(error);
  res.json({ message: error.message || 'An unknown error occured.' });
});

// Server Start & Database connection
sequelize
  .authenticate()
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server up and running on port: ${process.env.PORT || 5000}!`)
    )
  )
  .catch(error => console.log('Cannot reach database: ', error));
