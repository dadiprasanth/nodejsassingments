const express = require('express');
const bodyparser=require("body-parser")
const app = express();


// Import routes
const blogRoute = require('./routes/blog');
app.use(bodyparser.urlencoded({extended:false}))


//Router MIddlewares
app.use(express.json());
app.use('/', blogRoute);

module.exports = app;
