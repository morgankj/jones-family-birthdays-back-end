const db = require("../data/db-config");

const findAllPeople = () => {
  return db("people");
};

module.exports = {
    findAllPeople
};
