const user = require("./user.model")
const post = require('./posts.model')


user.hasMany(post, { foreignKey: 'UserID' })
post.belongsTo(user, { foreignKey: 'UserID' })
module.exports = { user, post }