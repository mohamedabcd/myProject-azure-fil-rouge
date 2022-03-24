const express = require("express");
const router = express.Router();
const Students = require("../models/Students.js");
const db = require("../models/index.js");

router.get("/", async (req, res) => {
  const listOfStudents = await db.Students.findAll();
  res.json(listOfStudents);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await db.Students.create(post);

  res.json(post);
});

module.exports = router;
