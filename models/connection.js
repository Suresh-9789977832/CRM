import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import mongodb from "mongodb"
dotenv.config();
const  dburl= process.env.DB_URL;


// Connecting MongoDB
async function connection() {
  const client = new MongoClient(dburl);
  await client.connect();
  console.log("Database connection established successfully!");
  return client;
}

export default connection