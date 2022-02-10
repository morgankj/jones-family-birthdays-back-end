exports.seed = async function (knex) {
  await knex("nuclear").insert([
    {
      nuclear_name: "Jim + Dana"
    },
    {
      nuclear_name: "Travis + Morgan"
    },
    {
      nuclear_name: "Ian + Emily"
    },
  ]);
};
