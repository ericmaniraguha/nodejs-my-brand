const express = require("express");
const mongoose = require("mongoose");
const { post } = require("../routes");
const router = require("../routes");
const routes = require("../routes");

mongoose
  .connect("mongodb://localhost:27017/nodejs-mybrand", { useNewUrlParser: true })
  .then(() => {
      const app = express();
      
      app.use(express.json());
      
      app.use("/api", routes);
     
    //   app.get("/", (req, res) => {
    //       res.send("Update");
    //   })

    app.listen(5000, () => {
      console.log("Server has started!");
    });
      
    router.get("/posts/:id", async (req, res) => {
        const post = await post.findOne({ _id: req.params.id })
        res.send(post);
    })
    

  }).catch(() => {
      console.log("Database Connection failed....")
  })