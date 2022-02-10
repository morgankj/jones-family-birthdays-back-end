exports.seed = async function (knex) {
  await knex("users").insert([
    {
      username: "Morgan",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq" // password "1234"
    },
    {
      username: "user1",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq" // password "1234"
    },
  ]);
};
