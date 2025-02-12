const express = require('express');
const router = require('./src/routers/api');
const app = express();

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');

let URL = "mongodb://localhost:27017/MernEcommerce";
let option = { user: "", pass: "", autoIndex: true }

mongoose.connect(URL, option).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Error: ", err);
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // for static files like images, css, js
app.use(helmet());
app.use(mongoSanitize());

//
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Rate Limiting 
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100
});
//this is for the static files like images, css, js etc
app.use(express.static('client/dist'));

app.use(limiter);
// Routing implementation

app.use('/api/v1', router);

module.exports = app;