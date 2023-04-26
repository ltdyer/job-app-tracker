const { MongoClient } = require("mongodb");
const Db = process.env.URI;
const client = new MongoClient(Db);

var _db;

const listDatabases = async () => {
  const dbList = await client.db().admin().listDatabases();
  console.log(dbList);
}
module.exports = {
  connectToServer: async function() {
    try {
      await client.connect();
      await client.db("Test").command({ ping:1 });
      console.log("Successfully connected to MongoDB")
      // await listDatabases();
      _db = client.db("jobDb");
    } catch (err) {
      console.log(err);
    }
  },
  getDb: function () {
    return _db;
  }
};
