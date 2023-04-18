const express = require("express")
const router = express()
const db = require("../config/db")
const post = require("../models/posts.model");
const User = require("../models/user.model");
const { where } = require("sequelize");

router.use(express.json());

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const condition = await User.findOne({ where: { id: id, Role: "admin" } })
    if (condition != null) {
        const posts = await post.findAll();
        res.send(posts)
    }
    else {
        res.send("your access is forbidden")
    }

});

router.post("/:id", async (req, res) => {
    const id = req.params.id
    const condition = await User.findOne({ where: { id: id, Role: "admin" } })
    if (condition != null) {
        const newpost = await post.create({
            UserID: req.body.UserID,
            Title: req.body.Title,
            Body: req.body.Body
        })
        res.send("created")
    }
    else {
        res.send("your access is forbidden")
    }
});

router.post("/:id/:postid", async (req, res) => {
    const Id = req.params.id
    const condition = await User.findOne({ where: { id: Id, Role: "admin" } })
    if (condition != null) {
        const updatedpost = await post.update({
            UserID: req.body.UserID,
            Title: req.body.Title,
            Body: req.body.Body
        }, {
            where: {
                id: req.params.postid
            }
        })
        res.send("updated")
    }
    else {
        res.send("your access is forbidden")
    }

});
router.delete("/:id/:postid", async (req, res) => {
    const id = req.params.id
    const condition = await User.findOne({ where: { id: id, Role: "admin" } })
    if (condition != null) {
        await post.destroy({
            where: {
                id: req.params.postid
            }
        });
        res.send("Deleted")
    }
    else {
        res.send("your access is forbidden")
    }


})

module.exports = router