const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Database key
const dataBase = require('./config/key').mongoURI;

//Connect to database
mongoose.connect(dataBase, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log('MongoDB connected');
}).catch(error => {
    console.log(error);
});


const items = require('./routes/api/items'); // Path to the item routes

app.use('api/items', items); // use the routes 
app.use(express.json());
app.use(cors());


// Listen for requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
