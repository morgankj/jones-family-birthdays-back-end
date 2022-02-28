const db = require("../data/db-config");

const checkPeople = async (req, res, next) => {
  try {
    const peopleInFamily = await db("people").where(
      "nuclear_id",
      req.params.nuclear_id
    );

    if (peopleInFamily.length > 0) {
        console.log("TRUE");
      res.status(400).json({
        message: "Cannot delete family record while people are attached.",
      });
    }

    next();

  } catch (err) {
    next(err);
  }
};

module.exports = { checkPeople };
