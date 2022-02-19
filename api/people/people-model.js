const db = require("../data/db-config");

const findAllPeople = () => {
  return db("people");
};

const findPersonById = (person_id) => {
  return db("people").where("person_id", person_id);
};

module.exports = {
  findAllPeople,
  findPersonById,
};
