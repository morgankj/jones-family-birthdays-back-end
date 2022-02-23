const db = require("../data/db-config");

const findAllNuclearFamilies = () => {
  return db("nuclear");
};

const findNuclearFamilyById = (nuclear_id) => {
  return db("nuclear").where("nuclear_id", nuclear_id);
};

module.exports = {
  findAllNuclearFamilies,
  findNuclearFamilyById,
};
