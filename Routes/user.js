const express = require("express");
const userController = require("../Controller/user");
const router = express.Router();

//===============API -Endpoint  -Route==========
// users
//API ROOT, base URL, google.com/api/v2
//Create POST /users                 C R U D
router
  .post("/users", userController.createUser)

  //READ GET /users
  .get("/users", userController.getAllUsers)

  .get("/users/:id", userController.getUser)

  //UPDATE PUT /users/:id
  .put("/users/:id", userController.replaceUser)

  //UPDATE PATCH /users/:id
  .patch("/users/:id", userController.updateUser)

  //DELETE /users/:id
  .delete("/users/:id", userController.deleteUser);

exports.router = router;
