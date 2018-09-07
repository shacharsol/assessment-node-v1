import express from "express"
import getUsers from "../repository/get-users"

const router = express.Router();

/* GET /users listing. */
router.get('/', function(req, res, next) {
  getUsers() // use this method
  // change your code from here!
  res.send([
    {
      _id: "the-id",
      isActive: true,
      firstName: "Some-one",
      lastName: "Good-name",
      balance: "$200"
    }
  ])

})

// B. write another API here....

export default router
