require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const authRoutes = require('./routes/authRoute');
const blogRoutes = require('./routes/blogRoute');

const app = express();
const PORT = process.env.PORT || 5000;
const connection_string = process.env.CONNECTION_STRING
app.use(cors(
  {
    origin: ["http://localhost:5173","https://blog-app-ruby-alpha-74.vercel.app"],  // Change this to your React frontend URL for security
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
  }
));
app.use(express.json());

mongoose.connect(connection_string).then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));;

app.get('/',(req,res)=>{
  res.json({message: 'Welcome to the Blogging API!',
    routes: {
      'User Authentication': {
        signup: 'POST /api/auth/signup',
        login: 'POST /api/auth/login',
      },}})
})
app.use('/api/auth',authRoutes);
app.use('/api/blogs',blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
  });