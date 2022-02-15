exports.seed = async function (knex) {
  await knex("users").insert([
    {
      username: "Morgan",
      password: "$2a$08$.cxGcJOZNUL9JSf1TWYlg.yPt91QzN80SFPuaHdPpSzZ4CB.FNhuO", // password "1234"
      email: "morgan.kjones95@gmail.com"
    },
    {
      username: "user1",
      password: "$2a$08$.cxGcJOZNUL9JSf1TWYlg.yPt91QzN80SFPuaHdPpSzZ4CB.FNhuO", // password "1234"
      email: "email@email.com"
    },
  ]);
};
