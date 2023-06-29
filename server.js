const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDb = require('./config/db.js');

// dot config
dotenv.config();

// Database Connection 
connectDb()

// express object 
const app = express();

app.get('/', (req, res) => {
    res.status(200);
    res.json({
        message: 'Welcome to server!',
        status : 'Success',

    });
});

// middleware 
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log('listening on port => ' + PORT);
});
