const express = require("express");
const router = express.Router();
const Comments = require("../models/Comments.js");
const db = require("../models/index.js");
const { validateToken } = require("../middlewares/AuthMiddleware.js")


router.get('/:postId', async (req, res) => {
    const postId = req.params.postId
    const comments = await db.Comments.findAll({ where: { studentId: postId }});
    res.json(comments);
 })


router.post("/", validateToken, async (req,res) => {
    const comment = req.body
    const username = req.user.username
    comment.username = username;
    await db.Comments.create(comment);
    res.json(comment);
})



module.exports = router;