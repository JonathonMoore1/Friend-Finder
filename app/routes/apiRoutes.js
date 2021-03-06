var friendData = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
        console.log("Displaying friendData JSON object...");
    });

    app.post('/api/friends', function(req, res) {
        friendData.push(req.body);
        res.json(true);
        console.log("New friend added to data object");
    });

    app.post('api/clear', function(req, res) {
        friendData = [];
        console.log("friendData body has been deleted.");
    });
}