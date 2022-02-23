const router = require("express").Router();
const Families = require("./family-model");

router.get("/", (req, res, next) => {
  Families.findAllNuclearFamilies()
    .then((families) => {
      res.status(200).json(families);
    })
    .catch(next);
});

module.exports = router;
