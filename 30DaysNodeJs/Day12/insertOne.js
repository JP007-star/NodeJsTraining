const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://justice_of_peace:Prasad123@cluster0.nj4bnqt.mongodb.net/';
const dbName = 'demo_db'; 
const collectionName = 'demo'; 


const data={ name: 'John', age: 30, email: 'john@example.com' }
 

async function insertData() {
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB successfully');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

   
    const result = await collection.insertOne(data);
    console.log(result);


   

    client.close();
    console.log('Connection to MongoDB closed');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the function to insert data
insertData();
