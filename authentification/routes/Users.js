const express = require("express");
const router = express.Router();
const Users = require("../models/Students.js");
const db = require("../models/index.js");
const bcrypt = require("bcryptjs");
const {sign} = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware.js");

router.post("/", async (req, res) => {
  const { name, password, isAdmin } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    db.Users.create({
      name: name,
      password: hash,
      isAdmin: isAdmin,
    });
    res.json("success");
  });
});

router.post("/login", async (req, res) => {

  const { name, password, isAdmin } = req.body;
  const user = await db.Users.findOne({ where: { name: name } });

  if (!user) return res.json({ error: "user doesn't Exist" });

  bcrypt.compare(password, user.password).then( async (match) => {
      if (!match) res.json({ error: "Wrong Username and Password Combination" });

        const accessToken = sign(
          { name: user.name, id: user.id },
          "importantsecret"
        );
        res.json(accessToken);
        console.log(accessToken);
    });
    
    
});

router.get('/auth', validateToken,(req, res) => {
  res.json(req.user)
})

module.exports = router;
