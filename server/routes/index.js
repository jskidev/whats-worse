require('dotenv').config();
var express = require('express');
const CONNECTION = process.env.CONNECTION;
const CONNECTION2 = process.env.CONNECTION2;
const CONNECTION3 = process.env.CONNECTION3;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://"+CONNECTION+":"+CONNECTION2+"@cluster0.jdz5p.mongodb.net/"+CONNECTION3+"?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var router = express.Router();
client.connect();



router.get('/api/', async function(req, res) {
    //await client.connect();
    const db = client.db("whatsworse");
    const col = db.collection("things");
    const myDoc = await col.find().toArray(function(err, documents) {
        if (err) throw error;

        rand1 = Math.floor(Math.random() * documents.length);
        rand2 = Math.floor(Math.random() * documents.length);

        while (rand1 === rand2) {
            rand2 = Math.floor(Math.random() * documents.length);
        }

        let docs = [];
        docs.push(documents[rand1]);
        docs.push(documents[rand2]);

        res.json(docs);
    });
});

router.post('/api/vote', async (req, res) => {
    //await client.connect();
    const db = client.db("whatsworse");
    const col = db.collection("votes");
    
    let docToInsert = {
        w_id: req.body.w_id,
        w_name: req.body.w_name,
        l_id: req.body.l_id,
        l_name: req.body.l_name
    }
    
    const myDoc = await col.insertOne(docToInsert)
    .then(result=>{
        console.log('inserted:' + result.ops[0]._id);
    })
    .catch( error => {
        res.json(error)
    })
    
    const myNewDoc = await col.find({ w_id: docToInsert.w_id, l_id: docToInsert.l_id }).toArray(function(err, documents) {
        res.json(req.body.w_name + ' has beaten ' + req.body.l_name + ' ' + documents.length + ' times');
    });

});

router.post('/api/new', async (req, res) => {
    //await client.connect();
    const db = client.db("whatsworse");
    const col = db.collection("things");
    let docToInsert = {
        name: sanitizeString(req.body.name)
    }
    const myDoc = await col.insertOne(docToInsert)
    .then(result=>{
        console.log('inserted:' + result.ops[0]._id);
        res.json('thing successfully added');
    })
    .catch( error => {
        res.json(error)
    })
});

router.get('/api/leaderboard', async function(req, res) {
    //await client.connect();
    const db = client.db("whatsworse");
    const col = db.collection("votes");
    const myDoc = await col.find().toArray(function(err, documents) {
        if (err) throw error;

        var winners = [];
        documents.forEach(doc => {
            winners.push(doc['w_name']);
        });

        var uniqueWinners = new Set(winners); 
        var uniqueWinnersArray = Array.from(uniqueWinners);
        var winnersObjArray = [];

        function count(toCount, allOccurences) {
            for(var i = 0; i < toCount.length; i++) {
              var count = 0;
              for(var z = 0; z < allOccurences.length; z++) {
                if (allOccurences[z] === toCount[i]) count++;
              }
             
             winnersObjArray.push({name:toCount[i],total:count})
            }
        }
        count(uniqueWinnersArray,winners);

        winnersObjArray.sort(function(a, b){
            return a.total-b.total
        }).reverse();

        winnersObjArray.length > 10 ? winnersObjArray.length  = 10 : winnersObjArray.length;

        res.json(winnersObjArray);
    });
});

function sanitizeString(str){
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return str.trim().toLowerCase();
}

module.exports = router;