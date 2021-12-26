const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const _dbconnect = () => {
  const server = '127.0.0.1:27017';
  const database = 'MernTO';
  mongoose
    .connect(`mongodb://${server}/${database}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database connection successful');
    })
    .catch((err) => {
      console.error('Database connection error');
    });
};

_dbconnect();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/todos', require('./routes/api/_todo'));

app.get('/', (req, res) => {
  res.send('Server');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
