const db = require("../data/db-config");

const checkNuclearName = async (req, res, next) => {
  try {
    const nuclearExists = await db("nuclear")
      .where("nuclear_name", req.body.nuclear_name)
      .first();

    if (!nuclearExists) {
      let newNuclearId;
      try {
        [newNuclearId] = await db("nuclear").insert(
          {
            nuclear_name: req.body.nuclear_name,
          },
          ["nuclear_id"]
        );
      } catch (err) {
        next(err);
      }

      req.body.nuclear_id = newNuclearId.nuclear_id;
      next();

    } else {
      req.body.nuclear_id = nuclearExists.nuclear_id;
      next();
      
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkNuclearName,
};
