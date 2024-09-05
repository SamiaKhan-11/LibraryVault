const { Schema, model } = require('../connection');

const MySchema = new Schema({
    category: String,
    name: String,
    version: String,
    package_name: String,
    tags: String,
    description: String,
    downloads: String,
    updated: String,
    link: String,
    language: { type: String },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('library', MySchema);