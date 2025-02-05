require('dotenv').config
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;
const connection_string = process.env.MONGO_CONNECTION_STRING
console.log(connection_string)
app.use(cors());
app.use(express.json());

mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
  });