const db = require("../data/db-config");

const checkNuclearName = async (req, res, next) => {
  try {
    const nuclearExists = await db("nuclear")
      .where("nuclear_name", req.body.nuclear_name)
      .first();
    if (!nuclearExists) {
      const [newNuclearId] = await db("nuclear").insert(req.body.nuclear_name);
      req.body.nuclear_id = newNuclearId;
      next();
    }
    req.body.nuclear_id = nuclearExists;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkNuclearName,
};
