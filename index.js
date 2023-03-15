const express = require("express");
const app = express();
app.use(express.json());
const productRouter = require("./Routes/product");
const userRouter = require("./Routes/user");

app.use("/api", productRouter.router); //This is a middleware between app and router
app.use("/api", userRouter.router); //This is a middleware between app and router

// const morgan = require("morgan");

app.listen(8080, () => {
  console.log("server started");
});
