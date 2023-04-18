const express = require("express")
const router = express()
const db = require("../config/db")
const User = require("../models/user.model");
const { where } = require("sequelize");
// router.get("/", async (req, res) => {
//     const users = await User.findAll();
//     res.send(users)
// });
router.use(express.json());

router.post("/", async (req, res) => {
    const newuser = await User.create({
        Username: req.body.Username,
        password: req.body.password,
        email: req.body.email,
        Role: req.body.Role
    })
    res.send("created")
});

router.post("/:id", async (req, res) => {
    const user = await User.update({
        Username: req.body.Username,
        email: req.body.email,
        password: req.body.password,
        Role: req.body.Role
    }, {
        where: {
            id: req.params.id
        }
    })
    res.send("updated")
});
router.delete("/:id", async (req, res) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send("Deleted")
})

module.exports = router