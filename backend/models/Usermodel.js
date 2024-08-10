const { Schema, model} = require('../connection');

const mySchema = new Schema({
    name:String,
    email:{ type:String, unique:true},
    password:{ type:String, required:true},
    confirmpassword:{ type:String, required:true},
    createdAt:{ type:Date, default: Date.now}
});

module.exports= model( 'users',mySchema);

//name description version package_name downloads updated tags