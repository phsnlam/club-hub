const express = require('express')
const Joi = require('@hapi/joi')
const router = express.Router()
const admin = require('firebase-admin');
const { ClubSchema } = require('@clubhub/common/models');
const {clubControllers} = require('../../controllers');

const addClub = clubControllers.addClub;


/* GET users listing. */
router.post('/', (req, res, next) => { // , async (req..) =>
    addClub(req.body).then((result)=>{
        res.send('successful')
        return true;
    }).catch((e)=>{
        console.log('There is an error:')
        console.log(e)
        console.log(e.message)
        res.send(e.message)
    });
    //res.send('respond with a resource')
    
})



module.exports = router
