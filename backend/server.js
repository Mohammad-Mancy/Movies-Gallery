require('dotenv').config()

const express = require('express')
// const dotenv = require('dotenv')
const mongoose = require('mongoose')

// DB Connection
mongoose.connect(process.env.DB_CONNECT,
    () =>{
        console.log('Connected Successfully')
    }
);

const app = express()
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' +process.env.PORT)
})