const MongoClient = require('mongodb').MongoClient,
        dotenv = require('dotenv/config');
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@cluster0-xowlj.mongodb.net/userAdmin?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
// var connection;
// module.exports= {
//     dbConnection: async ()=>{
//         try{
//             connection = await client.connect();
//             console.log("connection yash"+connection);
//         }
//         catch(err){
//             console.log(err);
//         }
//     },
//     getConnectionObject: connection;
// };
let _db,collection;

 const connectDB = async () => {
    try {
        MongoClient.connect(uri, (err, db) => {
            _db = db.db('userAdmin');
            collection = _db.collection('userDetails');
        })
    } catch (e) {
        throw e
    }
}

const getCollection = () => collection;

const disconnectDB = () => _db.close();

module.exports = { connectDB, getCollection, disconnectDB };