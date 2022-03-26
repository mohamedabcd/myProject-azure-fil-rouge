const express = require("express");
const router = express.Router();
const Students = require("../models/Students.js");
const db = require("../models/index.js");

router.get("/", async (req, res) => {
  const listOfStudents = await db.Students.findAll();
  res.json(listOfStudents);
});

router.get('/byid/:id', async (req, res) => {
   const id = req.params.id
   const post = await db.Students.findByPk(id);
   res.json(post)
})

router.post("/", async (req, res) => {
  const post = req.body;
  await db.Students.create(post);

  res.json(post);
});

module.exports = router;
