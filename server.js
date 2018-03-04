// Dependencies
var express = require('express');
var bp = require('body-parser');
//var path = require('path');

// Express Configuration
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bp.urlencoded({ extended: false}));
app.use(bp.json());

// Routing
require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);

// Listening
app.listen(PORT, function(err) {
    if (err) throw err;
    console.log('Listening on port ' + PORT);
})