const mongoose = require("mongoose");
const schema = mongoose.Schema({
    userusername: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
}, {
    versionKey: false
});

const User = mongoose.model("User", schema);

module.exports = User;