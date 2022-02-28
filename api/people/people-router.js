const router = require("express").Router();
const People = require("./people-model");
const { checkNuclearName } = require("./people-middleware");

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

router.post("/", checkNuclearName, (req, res, next) => {
  const newPerson = {
    person_name: req.body.person_name,
    person_birthday: req.body.person_birthday,
    person_image: req.body.person_image,
    person_spouse_id: req.body.person_spouse_id,
    nuclear_id: req.body.nuclear_id,
  };

  People.addPerson(newPerson)
    .then((person) => {
      res.status(201).json(person);
    })
    .catch(next);
});

router.put("/:person_id", (req, res, next) => {
  req.body.person_id = req.params.person_id;
  People.updatePerson(req.body)
    .then(person => {
      res.status(200).json(person);
    })
    .catch(next);
});

router.delete("/:person_id", (req, res, next) => {
  People.deletePerson(req.params.person_id)
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
