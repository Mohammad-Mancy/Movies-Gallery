require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const userRouter = require('./src/user')
const movieRouter = require('./src/movie')

// DB Connection
mongoose.connect(process.env.DB_CONNECT,
    () =>{
        console.log('Connected Successfully')
    }
);

const app = express()
app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api', movieRouter);

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' +process.env.PORT)
})