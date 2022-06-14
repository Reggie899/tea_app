const userData = require("../user_data/user.js");

function showUserData (req, res ) {
    res.send(userData);
}
module.exports = showUserData;