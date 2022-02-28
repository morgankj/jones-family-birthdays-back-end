const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res, next) => {
  Users.findAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

router.delete("/:user_id", (req, res, next) => {
  Users.deleteUser(req.params.user_id)
    .then((count) => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Record not found" });
      }
    })
    .catch(next);
});

module.exports = router;
