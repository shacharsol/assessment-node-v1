import express from "express"
import getUsers from "../repository/get-users"
import _ from 'lodash';
const router = express.Router();


const filterUserColumns =(data)=>{
  return _.map(data, _.partialRight(_.pick, ['_id', 'isActive', 'firstName', 'lastName', 'balance']))
}



router.get('/', async (req,res,next)=> { 
  let  data = await getUsers();
  if (!data){
   return  res.status(404).send({
      "error": "Could not find users!",
        "code": 404
      });        
  }
  return res.status(200).send(filterUserColumns(data));  
})


router.get('/:id', async (req,res,next)=> { 
   let  data = await getUsers();
   let userId =   req.params.id;
   let userFound = await findUserById(userId,data);
   if (userFound){
      res.status(200).send(
        userFound[0]
      );
      
   }
  else{
    res.status(404).send({
      "error": "Could not get users!",
        "code": 404
      })          
  }
})

const findUserById = async (userId,userData)=>{
  let userFound = _.filter(userData,function(user){
    return user._id ===userId;
  });
  if (!userFound || userFound.length === 0){
    return;
  }
  return userFound;
  
}

export default router
