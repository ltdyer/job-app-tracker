const express = require("express");
const conn = require("../connection");
const routes = express.Router();

routes.get("/get-jobs", (async (req, res) => {
  try {
    let collection = await conn.getDb().collection("jobs");
    let results = await collection.find({}).toArray();
    res.status(200).send(results);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
}));

routes.post("/add-job", async (req, res) => {
  try {
    let collection = await conn.getDb().collection("jobs");
    console.log(req.body);
    if (!req.body.company || !req.body.title || !req.body.status) {
      throw new Error("Request body needs company, title, and status!");
    }
    let results = await collection.insertOne(req.body);
    console.log(results);
    res.status(200).send({message: "successful"});
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
})

module.exports = routes;