// Dependencies
var path = require('path');

// Export GET and POST requests
module.exports = function(app) {
    app.get('/home', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
        console.log('Displaying homepage...');
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
        console.log('Displaying survey...');
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}