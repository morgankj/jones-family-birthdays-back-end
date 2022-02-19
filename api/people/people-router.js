const router = require("express").Router();
const People = require("./people-model");

router.get("/", (req, res, next) => {
  People.findAllPeople()
    .then((people) => {
      res.status(200).json(people);
    })
    .catch(next);
});

router.get("/:person_id", (req, res, next) => {
  People.findPersonById(req.params.person_id)
    .then((person) => {
      res.status(200).json(person);
    })
    .catch(next);
});

module.exports = router;
