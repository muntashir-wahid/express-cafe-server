const dbo = require("../db/conn");

exports.createCoffee = async (req, res) => {
  const dbConnect = dbo.getDb();
  const coffesCollection = dbConnect.collection("coffees");
  const coffee = {
    name: "test 4",
    price: 120,
  };

  const result = await coffesCollection.insertOne(coffee);

  res.send(result);
};

exports.readCoffees = async (req, res) => {
  const dbConnect = dbo.getDb();
  const coffesCollection = dbConnect.collection("coffees");
  const query = {};

  const coffees = await coffesCollection.find(query).toArray();

  res.send(coffees);
};
