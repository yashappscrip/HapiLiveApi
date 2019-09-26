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
// };let _db

 const connectDB = async (callback) => {
    try {
        MongoClient.connect(uri, (err, db) => {
            _db = db
            return callback(err)
        })
    } catch (e) {
        throw e
    }
}

const getDB = () => _db;

const disconnectDB = () => _db.close();

module.exports = { connectDB, getDB, disconnectDB };