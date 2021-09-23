const express       = require('express')
const mongoose      = require('mongoose')
const morgan        = require('morgan')


const UserDataRoute = require('./routes/userdata')
const AuthRoute     = require('./routes/auth')

mongoose.connect('mongodb://localhost:27017/db_bagusimamsyahputra_betest', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () =>{
    console.log('Database Connection Established!')
})

const app = express()

// app.use(morgan('dev'));
// app.use(express.urlencoded({extended: true})); 
// app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/userdata', UserDataRoute)
app.use('/api', AuthRoute)