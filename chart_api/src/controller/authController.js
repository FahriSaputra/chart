const { User } = require("../../db/models");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username == undefined || username == null) {
      res.send({
        status: "Error",
        message: "Username or password invalid",
      });
    }
    const response = await User.findOne({ where: { username } });

    const passwordIsValid = (input) => {
      if (input === response?.password) {
        return true;
      } else {
        return false;
      }
    };

    if (passwordIsValid(password)) {
      res.send({
        status: "Success",
        message: "Username and password match",
      });
    }

    res.status(401).send({
      status: "Failed",
      message: "Username or password not match",
    });
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};
