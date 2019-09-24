const MongoClient = require('mongodb').MongoClient,
        dotenv = require('dotenv');
dotenv.config();
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@cluster0-xowlj.mongodb.net/userAdmin?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
const dbConnection = ()=>{
    return new Promise((resolve,reject)=>{ 
        client.connect(err => {
            if(err) reject("Error while connection with DB");
            else { resolve("Connection Established"); const userCollection =  client.db("userAdmin").collection('userDetails'); const adminCollection =  client.db("userAdmin").collection('userDetails');}
        });
    });
};
module.exports= dbConnection;