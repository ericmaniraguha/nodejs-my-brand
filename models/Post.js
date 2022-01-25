const mongoose = require("mongoose")

const schema = new mongoose.Schema({
	title: String,
    content: String,
    description: String,
     year: Number
})

module.exports = mongoose.model("Post", schema)