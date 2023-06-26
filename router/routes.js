const express=require('express')
const route=express.Router();

const {getDetails,postDetails,getSingleDetails,deleteDetails,updateDetails}=require('../controller/crudcontroller')
route.route('/getall').get(getDetails)
route.route('/getbyid/:id').get(getSingleDetails)
route.route('/updatebyid/:id').put(updateDetails)
route.route('/createdetails').post(postDetails)
route.route('/deletedetails').delete(deleteDetails)



module.exports=route;