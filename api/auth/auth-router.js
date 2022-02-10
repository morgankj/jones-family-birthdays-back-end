const router = require("express").Router();
const { BCRYPT_ROUNDS } = require("../secrets");
const bcrypt = require("bcryptjs");
const makeToken = require("./auth-token-builder");

router.post("/register", (req, res, next) => {
    let newUser = req.body;

    const hash = bcrypt.hashSync(newUser.password, BCRYPT_ROUNDS);
    newUser.password = hash;
});

module.exports = router;
