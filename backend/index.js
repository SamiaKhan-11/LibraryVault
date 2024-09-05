//npx create-next-app@ frontend
//prompts (yes/no) [1 & last was no ]
//mkdir backend
//cd backend
//npm init -y
//npm i express nodemon mongoose cors dotenv jsonwebtoken


const express = require('express');
const UserRouter = require('./router/UserRouter')
const LibraryRouter = require('./router/LibraryRouter')
const cors = require('cors')

//Initializing express
const app = express();

const port = 5000;

//middleware
app.use( cors ({ 
    origin : 'http://localhost:3000'
}))

app.use(express.json());

app.use('/user', UserRouter);
app.use('/library', LibraryRouter);



//endpoint or route
// local host /
app.get('/', (req,res) => { 
    res.send('respond from express')
});

app.get('/add', (req,res) => {
    res.send('response from add')
});

app.get( '/getall', (req,res) => {
    res.send('this is getall')
});

app.get( '/update', (req,res) => {
    res.send('response from update')
});

app.get('/delete', (req,res) => {
    res.send('response from delete')
})

//starting the server
app.listen(port, () => { 
    console.log('server started');
} );



//echo \"Error: no test specified\" && exit 1