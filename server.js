const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Database configuration/key
const dataBase = require('./config/key').mongoURI;

//Connect to Mongo database
mongoose.connect(dataBase, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true }).then(() => {
    console.log('MongoDB connected');
}).catch(error => {
    console.log(error);
});

// Listen for requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
