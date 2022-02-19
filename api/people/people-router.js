const router = require("express").Router();
const People = require("./people-model");

router.get("/", (req, res, next) => {
    People.findAllPeople()
        .then(people => {
            res.status(200).json(people);
        })
        .catch(next);
});

module.exports = router;
