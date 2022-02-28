const router = require("express").Router();
const Families = require("./family-model");
const { checkPeople } = require("./family-middleware");

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

router.delete("/:nuclear_id", checkPeople, (req, res, next) => {
  Families.deleteNuclearFamily(req.params.nuclear_id)
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
