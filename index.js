var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        const dbo=db.db("mydb");
        const query={name:"Wasit Mirani",address:"Karachi cantt station"};
        dbo.collection("customers").insertOne(query,(err,res)=>{
                if(err) throw err;
                console.log(res);

                db.close();
        });
        
});

