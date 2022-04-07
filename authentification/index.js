const express = require("express");
const app = express();
const Students = require("./routes/Students.js");
app.use(express.json());

const db = require("./models/index.js");
const cors = require("cors");

app.use(cors());

//Routers
const postRouter = require("./routes/Students.js");
app.use("/students", postRouter);

const commentsRouter = require("./routes/Comments.js");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users.js");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(5001, () => {
    console.log("Server running on port 5001");
  });
});
