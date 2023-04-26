// Sets up the express server
const express = require("express");
const app = express();

// Cross Origin Resource Sharing
const cors = require("cors");

// Loads config.env contents into the process.env variable
require("dotenv").config({ path: "./config.env" });

// Specifies port number
const port = process.env.PORT || 5000;

// Specify routes
const firstRoute = require("./routes/routes");

// Specify connection to db
const dbConnection = require("./connection.js");

app.use(cors());
app.use(express.json());
app.use(firstRoute);


app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await dbConnection.connectToServer();
})