const { Schema, model} = require('../connection');

const MySchema = new Schema({
    name:String,
    description:String,
    version:String,
    package_name:String,
    downloads:String,
    updated:String,
    tags:String,
    createdAt: { type:Date, default: Date.now}
})

module.exports = model( 'library', MySchema);