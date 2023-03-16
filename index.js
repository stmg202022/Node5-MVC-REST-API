require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const productRouter = require("./Routes/product");
const userRouter = require("./Routes/user");

// console.log(process.env);
// console.log(process.env.DB_PASSWORD);

app.use("/api", productRouter.router); //This is a middleware between app and router
app.use("/api", userRouter.router); //This is a middleware between app and router

// const morgan = require("morgan");

app.listen(8080, () => {
  console.log("server started");
});
