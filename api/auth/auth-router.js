const router = require("express").Router();
const { BCRYPT_ROUNDS } = require("../secrets");
const bcrypt = require("bcryptjs");
const makeToken = require("./auth-token-builder");
const User = require("../users/users-model");

router.post("/register", (req, res, next) => {
  let newUser = req.body;

  const hash = bcrypt.hashSync(newUser.password, BCRYPT_ROUNDS);
  newUser.password = hash;

  User.addUser(newUser)
    .then((addedUser) => {
      res.status(201).json(addedUser);
    })
    .catch(next);
});

router.post("/login", (req, res, next) => {
  let { username, password } = req.body;

  User.findByUsername(username)
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = makeToken(user);
        res
          .status(200)
          .json({ message: `Successfully logged in as ${username}`, token });
      } else {
        next({ status: 401, message: "Invalid credentials" });
      }
    })
    .catch(next);
});

module.exports = router;
