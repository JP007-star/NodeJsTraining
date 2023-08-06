const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://justice_of_peace:Prasad123@cluster0.nj4bnqt.mongodb.net/';
const dbName = 'demo_db'; 
const collectionName = 'demo'; 


const dataToInsert = [
    { name: 'John', age: 30, email: 'john@example.com' },
    { name: 'Jane', age: 25, email: 'jane@example.com' },
    // Add more documents here if needed
  ];
 

async function insertMany() {
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB successfully');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    // Insert the data into the collection
    const result = await collection.insertMany(dataToInsert);
    console.log(`${result.insertedCount} documents inserted`);
    console.log(result);
   
   


   

    client.close();
    console.log('Connection to MongoDB closed');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the function to insert data
insertMany();
