const conn=require('../db/db.config')
const getDetails=((req,res)=>{
    const sql="SELECT * FROM details"
    conn.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        res.send(result)
    })
})
// GET A SINGLE DETAILS USER
const getSingleDetails=((req,res)=>{
    const reqid=req.params.id
    const sql=`SELECT * FROM details WHERE id=?`
    conn.query(sql,reqid,(err,result)=>{
        if(err){
            throw err;
        }
        res.send(result)
    })
})
// // post 
const postDetails=((req,res)=>{
    let data={name:req.body.name,age:req.body.age,details:req.body.details}
    const sql="INSERT INTO details SET ?";
    conn.query(sql,data,(err,result)=>{
        if(err){
            throw err;
        }
        res.send(result)
    })

})
// DELETE -
const deleteDetails=((req,res)=>{
    const data=req.body.id
    const sql="DELETE FROM details WHERE id=?";
    conn.query(sql,data,(err,result)=>{
        if(err){
            throw err;
        }
        res.json({
            "data":1,
            "status":"delete sucessfully"
        })
    })
})
// update 
const updateDetails=((req,res)=>{
    const id=req.params.id
    const data={name:req.body.name,age:req.body.age,details:req.body.details}
    const sql=`update details SET ? WHERE id=${id}`;
    conn.query(sql,data,(err,result)=>{
        if(err){
            throw err;
        }
        res.json({
            "data":1,
            "update data":result,
            "status":"update sucessfully"
        })
    })
})


module.exports={getDetails,postDetails,getSingleDetails,deleteDetails,updateDetails}