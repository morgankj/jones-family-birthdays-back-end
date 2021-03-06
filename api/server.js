const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");
const peopleRouter = require("./people/people-router");
const familyRouter = require("./family/family-router");
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/people", peopleRouter);
server.use("/api/family", familyRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
