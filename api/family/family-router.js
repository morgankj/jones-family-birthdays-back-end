const router = require("express").Router();
const Families = require("./family-model");

router.get("/", (req, res, next) => {
  Families.findAllNuclearFamilies()
    .then((families) => {
      res.status(200).json(families);
    })
    .catch(next);
});

router.get("/:nuclear_id", (req, res, next) => {
  Families.findNuclearFamilyById(req.params.nuclear_id)
    .then((family) => {
      res.status(200).json(family);
    })
    .catch(next);
});

module.exports = router;
