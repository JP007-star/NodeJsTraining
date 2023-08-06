const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://justice_of_peace:Prasad123@cluster0.nj4bnqt.mongodb.net/';


async function connectDB() {
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB successfully');

    client.close();
    console.log('Connection to MongoDB closed');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the function to insert data
connectDB();

