const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path')

app.use(express.json());
app.use(cors());

require('dotenv').config();
const dbConnection = process.env.MONGOATLAS;

mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('MongoDB connected');
}).catch(error => {
    console.log(error);
});

const items = require('./routes/api/items'); // Path to routes
app.use('/api/items', items); // Use routes 

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Listen for requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
