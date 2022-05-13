const db = require("../data/db-config");

const findAllPeople = () => {
  return db("people");
};

const findPersonById = (person_id) => {
  return db("people").where("person_id", person_id);
};

const addPerson = async (person) => {
  const [newPerson] = await db("people").insert(person, [
    "person_id",
    "person_name",
    "person_birthday",
    "person_birthday",
    "person_spouse_id",
    "nuclear_id",
  ]);
  
  return newPerson;
};

const updatePerson = async (updates) => {
  await db("people").where("person_id", updates.person_id).update(updates);

  return findPersonById(updates.person_id);
};

const deletePerson = (person_id) => {
  return db("people").where({ person_id }).del();
};

module.exports = {
  findAllPeople,
  findPersonById,
  addPerson,
  updatePerson,
  deletePerson,
};
