import express from "express"
import getUsers from "../repository/get-users"
import _ from 'lodash';
const router = express.Router();

/* GET /users */
router.get('/', async (req, res, next) => {
  let data = await getUsers();
  if (!data) {
    return res.status(404).send({
      "error": "Could not find users!",
      "code": 404
    });
  }
  return res.status(200).send(filterUserColumns(data));
})
/* GET /users/:id */
router.get('/:id', async (req, res, next) => {
  let data = await getUsers();
  let userId = req.params.id;
  let userFound = await findUserById(userId, data);
  if (userFound) {
    res.status(200).send(userFound);
  }
  else {
    res.status(404).send({
      "error": "Could not get users!",
      "code": 404
    })
  }
})
/** find a user Id in user data */
const findUserById = (userId, userData) => {
  let userFound = _.filter(userData, function (user) {
    return user._id === userId;
  });
  if (!userFound || userFound.length === 0) {
    return;
  }
  return userFound[0];
}

/** filter user columns using lodash */
const filterUserColumns = (data) => {
  return _.map(data, _.partialRight(_.pick, ['_id', 'isActive', 'firstName', 'lastName', 'balance']))
}


export default router
