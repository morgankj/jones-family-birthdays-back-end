const db = require("../data/db-config");

const findAllUsers = () => {
  return db("users");
};

const findByUsername = async (username) => {
  return db("users").where("username", username);
};

const addUser = async (user) => {
  let [newUser] = await db("users").insert(user, [
    "user_id",
    "username",
    "password",
    "email",
  ]);
  return newUser;
};

const deleteUser = (user_id) => {
  return db("users").where({ user_id }).del();
};

module.exports = {
  findAllUsers,
  findByUsername,
  addUser,
  deleteUser
};
