/* B"H
*/

const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://joshchaffy:joshchaffy@cluster0.ooi3z.mongodb.net/?retryWrites=true&w=majority";
const DB_NAME = "amazify";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {});

async function connect() {
    await client.connect();
    return client.db(DB_NAME);
}

module.exports = { 
  connect, ObjectId
};