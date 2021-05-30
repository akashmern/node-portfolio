const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const app = express();

const mainRoute = require('./route/router');

const staticpath = path.join(__dirname, "./public");
app.use(express.static(staticpath));

app.set('view engine', 'ejs');

// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(mainRoute);

const port = process.env.PORT || 3000;

app.listen(port, (req,res) => {
    console.log('Server Running on Port No ' + port);
});
