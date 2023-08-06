const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://justice_of_peace:Prasad123@cluster0.nj4bnqt.mongodb.net/';
const dbName = 'demo_db'; 
const collectionName = 'demo'; 


 

async function updateManyData() {
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB successfully');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

   //query store the search condition
	var query = { age : {$gt : 25 } };
	//data stores the updated value
	var data = { $set : {age : "above 22" } }

    const result = await collection.updateMany(query,data);
    console.log(result);


   

    client.close();
    console.log('Connection to MongoDB closed');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the function to insert data
updateManyData();
