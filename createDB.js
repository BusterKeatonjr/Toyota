var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("toyota");
database.dropDatabase()
database = client.db("toyota");
const cats = database.collection("cars");
const result = await cats.insertOne({name:"Машина"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
