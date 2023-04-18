const express = require("express")
const app = express()
const db = require("./config/db")
const mod = require("./models/index.modules");
const Usersrouter = require("./routes/users.route");
const Postsrouter = require("./routes/posts.route");

db.authenticate().then(() => {
    db.sync({ alter: true });
    console.log("connect");
});
app.use("/users", Usersrouter)
app.use("/posts", Postsrouter)
app.listen(5000, () => {
    console.log("running")
})