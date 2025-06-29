const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const userRoutes = require("./routes/userRoutes"); 

const app = express();

const PORT = process.env.PORT || 5000;


app.use(cors());

app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));


app.use('/api/users',userRoutes);


app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));