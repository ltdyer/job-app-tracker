const express = require("express");
const conn = require("../connection");
const routes = express.Router();

routes.get("/get-jobs", (async (req, res) => {
  try {
    let collection = await conn.getDb().collection("jobs");
    let results = await collection.find({}).toArray();
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error.message);
  }
}));

routes.post("/add-job", async (req, res) => {
  try {
    let collection = await conn.getDb().collection("jobs");
    if (!req.body.company || !req.body.title || !req.body.status) {
      throw new Error("Request body needs company, title, and status!");
    }
    if (req.body.company.length === 1) {
      throw new Error("Company needs to be more than 1 character")
    }
    let results = await collection.insertOne(req.body);
    console.log(results);
    res.status(200).send({message: "successful"});
  } catch (error) {
    res.status(500).send(error.message);
  }
})

module.exports = routes;