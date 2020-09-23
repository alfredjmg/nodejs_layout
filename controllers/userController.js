const User = require('../models/User');

exports.getUsers = async (req, res) => {

    const users = await User.find({})
    .populate([
        {
            path: 'role_id',
            model: 'Role'
        },
        {
            path: 'country_id',
            model: 'Country'
        }
    ])

    res.json(users);
    
}