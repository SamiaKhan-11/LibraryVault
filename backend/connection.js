const mongoose = require('mongoose');

// const url = 'mongodb+srv://samia26khan:sam44@cluster0.jmcac6n.mongodb.net/Database?retryWrites=true&w=majority&appName=Cluster0'
const url = 'mongodb://localhost:27017/libraryvault'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;