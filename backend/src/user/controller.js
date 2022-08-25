const {addUser} = require('./service')
const bcrypt = require('bcryptjs');

async function register(req, res) {
    try {
      console.log(req.body);
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
  
      const addUserResult = await addUser(req.body, hashPassword);
      console.log('addUserResult =>', addUserResult);
      
      return res.send({ user: addUserResult._id });
    } catch (error) {
        return res.status(500).send({Response :'Somthing went wrong'});
    }
  }

  module.exports = {
    register
  }