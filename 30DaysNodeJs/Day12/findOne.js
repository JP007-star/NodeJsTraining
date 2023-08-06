const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://justice_of_peace:Prasad123@cluster0.nj4bnqt.mongodb.net/';
const dbName = 'demo_db'; 
const collectionName = 'demo'; 


 

async function findOneData() {
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB successfully');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    //findOne() reads the first occurance of any data from the database.
   
    const result = await collection.findOne({});
    console.log(result);


   

    client.close();
    console.log('Connection to MongoDB closed');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the function to insert data
findOneData();
