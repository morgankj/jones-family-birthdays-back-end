const db = require("../data/db-config");

const findAllNuclearFamilies = () => {
  return db("nuclear");
};

const findNuclearFamilyById = (nuclear_id) => {
  return db("nuclear as n")
    .join("people as p", "n.nuclear_id", "p.nuclear_id")
    .select(
      "n.nuclear_id",
      "n.nuclear_name",
      "p.person_id",
      "p.person_name",
      "p.person_birthday",
      "p.person_image",
      "p.person_spouse_id"
    )
    .where("n.nuclear_id", nuclear_id);
};

const deleteNuclearFamily = (nuclear_id) => {
  return db("nuclear").where({ nuclear_id }).del();
};

module.exports = {
  findAllNuclearFamilies,
  findNuclearFamilyById,
  deleteNuclearFamily,
};
