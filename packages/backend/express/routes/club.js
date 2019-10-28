const express = require('express')
const Joi = require('@hapi/joi')
const router = express.Router()
const admin = require('firebase-admin');
const { ClubSchema } = require('@clubhub/common/models');

async function addClub(data){
    console.log({body: data})
    let result = ClubSchema.validate(data, { stripUnknown: { objects: true } }) //strip removes unwanted attribute in club
    console.log(result);
    if (result.error){
        throw Error(result.error.details.messages)
    }else{
        const db = admin.firestore();
        let newClub =  await db.collection('clubs').add({
            name: data.name,
            active: data.active,    //three attributes that are required in schema
            description: data.description
        })
        return newClub; //in case wanted to do stuff after
    }
}


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
