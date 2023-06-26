const { query } = require('express')
const express=require('express')
const app=express()
const conn=require('./db/db.config')
const project_route=require('./router/routes')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
conn.connect((err)=>{
    if(err){
        console.log("disconnected check again")
        throw erro

    }
console.log("data base connected successfully")
})


app.use('/api',project_route)



app.listen(3000,()=>{
    console.log("server runing on port 3000")
})