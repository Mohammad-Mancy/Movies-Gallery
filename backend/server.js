require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const userRouter = require('./src/user')

// DB Connection
mongoose.connect(process.env.DB_CONNECT,
    () =>{
        console.log('Connected Successfully')
    }
);

const app = express()
app.use(cors());
app.use(express.json());

//########### API add user <TEST DB> ######
const Movie = require('./model/Movie')
app.use('/movie',async function add(req,res){
    const {
        title,
        overview,
        image,
        vote_avg,
        release_date,
        original_lng
      } = req.body;
    const movie = new Movie({
        title,
        overview,
        image,
        vote_avg,
        release_date,
        original_lng
      });
    
      await movie.save();
      return res.send({ Status: "Success" });
});

// ##########################################

app.use('/api/user', userRouter);

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' +process.env.PORT)
})