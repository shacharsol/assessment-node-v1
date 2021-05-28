import express from "express"
import getUsers from "../repository/get-users"
import _ from 'lodash';
const router = express.Router();


const filterUserColumns =(data)=>{
  return _.map(data, _.partialRight(_.pick, ['_id', 'isActive', 'firstName', 'lastName', 'balance']))
}

/* GET /users listing. */
router.get('/', function(req, res, next) {
  getUsers().then(function(data,err){
    if(err){
      
      res.status(404).send({
        "error": "Could not find users!",
          "code": 404
        })        
    }
    
    res.status(200).send(filterUserColumns(data));
   
  })  
 
  

})
/* GET /users/:id specific user */
router.get('/:id', function(req, res, next) {
  getUsers().then(function(data,err){
    let userId = req.params.id;
    if(err){
      res.status(404).send({
        "error": "Could not get users!",
          "code": 404
        })        
    }
    let userFound = _.filter(data,function(user){
      return user._id ===userId;
    });
 
    if (!userFound || userFound.length === 0){
   
      res.status(404).send({
        "error": "Could not find user "+userId +"!",
          "code": 404
        }) ;
        return;
    }
    // userFound =  filterUserColumns(                
    //   userFound
    // )
     

   res.status(200).send(
     userFound[0]
   );
    
    
   
    
  })   

})
 

export default router
