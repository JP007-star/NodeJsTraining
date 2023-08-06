const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://justice_of_peace:Prasad123@cluster0.nj4bnqt.mongodb.net/';
const dbName = 'demo_db'; 
const collectionName = 'demo'; 


 

async function updateOneData() {
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB successfully');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    //Query parameter is used to search the collection.
	var query = { name : "John" };
	//And When the query matches the data in the DB , "data" parameter is used to update the value.
	var data = { $set:{ name : "jp.com" , mobile : "1234567890" }}

    const result = await collection.updateOne(query,data);
    console.log(result);


   

    client.close();
    console.log('Connection to MongoDB closed');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the function to insert data
updateOneData();
