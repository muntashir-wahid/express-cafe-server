const { MongoClient } = require("mongodb");

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6ayglwi.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: async (callback) => {
    // client.connect(function (err, db) {
    //   if (err || !db) {
    //     return callback(err);
    //   }

    //   dbConnection = db.db("express_cafe");
    //   console.log("Successfully connected to MongoDB.");

    //   return callback();
    // });

    try {
      const db = await client.connect();
      if (db) {
        console.log("Database connected");
        dbConnection = db.db("express_cafe");

        return callback();
      }
    } catch {
      (err) => {
        return callback(err);
      };
    }
  },

  getDb: function () {
    return dbConnection;
  },
};
