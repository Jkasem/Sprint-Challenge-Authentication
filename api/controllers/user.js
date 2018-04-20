const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  if (!(username && password))
    res.status(422).json('provide name and password, yo');
  else
    User.create({ username: username, password: password })
      .then(user => res.status(201).json('created user'))
      .catch(error => res.status(500).json(error));
};

module.exports = {
  createUser,
};
