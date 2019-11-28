const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

require('dotenv').config();
const dbConnection = process.env.MONGOATLAS;

mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('MongoDB connected');
}).catch(error => {
    console.log(error);
});

const items = require('./routes/api/items'); // Path to routes
app.use('/api/items', items); // Use routes 

// Listen for requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
