const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/UserRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');

//connect mongoose
mongoose.connect('mongodb://127.0.0.1:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.log(err);
});

//application-level middleware
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
}); 

//routes
app.use('/users',userRoutes);

//Home route with EJS
app.get('/', (req, res) => {
    res.send('<h2>Welcome to Express + MongoDB</h2>');
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'));