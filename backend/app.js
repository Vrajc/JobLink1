const express= require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jobRoute = require('./routes/jobRoute');
const userRoute = require('./routes/userRoute');
const app= express();
require("dotenv").config();
const dbconnect = require('./config/database');
const port=  process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/jobs', jobRoute);
app.use('/api/users', userRoute);

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
      const { name, email, password, role, contact } = req.body;
      const user = new User({ name, email, password, role, contact });
      await user.save();
      res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
      res.status(400).send({ error: 'Registration failed' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });
      if (user) {
          res.status(200).send({ message: 'Login successful' });
      } else {
          res.status(400).send({ error: 'Invalid email or password' });
      }
  } catch (error) {
      res.status(400).send({ error: 'Login failed' });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:8000/`);
});

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/jobportal';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));
dbconnect();

//default route;

app.get('/',(req,res)=>{
    res.send('<h1>vrajj</h1>');
})

