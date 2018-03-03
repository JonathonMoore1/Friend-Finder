var friendData = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
        console.log("Data sent successfully");
    });

    app.post('/api/friends', function(req, res) {
        friendData.push(req.body);
        console.log("New cuddle buddy added to data object");
    });
}