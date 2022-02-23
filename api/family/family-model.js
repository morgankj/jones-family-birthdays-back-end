const db = require("../data/db-config");

const findAllNuclearFamilies = () => {
  return db("nuclear");
};

module.exports = {
  findAllNuclearFamilies,
};
