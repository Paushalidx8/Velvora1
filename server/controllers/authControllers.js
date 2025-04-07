// const User = require("../models/User");
// const bcrypt = require("bcryptjs");

const signin = (req, res) => {
  res.status(200).json({ message: "Signin route working!" });
};

module.exports = { signin };
