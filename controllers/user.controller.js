const User = require('../models/user.model');

const getUser = (req, res) => {
    res.send('Get user')
};

module.exports = { getUser }; 