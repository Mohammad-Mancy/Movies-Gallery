require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

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
const User = require('./model/User')
app.use('/',async function (req,res){
    const {
        name,
        email,
        password
      } = req.body;
    const user = new User({
        name,
        email,
        password
      });
    
      await user.save();
      return res.send({ Status: "Success" });
});
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

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' +process.env.PORT)
})