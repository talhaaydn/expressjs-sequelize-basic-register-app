const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// view settings
app.set('view engine', 'pug');

// use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// models
var models = require("./models");

// routes
var users = require('./routes/users');

// Sync Database
models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});

app.use('/form', users);

var port = process.env.PORT || 3030;
app.listen(port, console.log(`Server started! At http://localhost:${port}`));