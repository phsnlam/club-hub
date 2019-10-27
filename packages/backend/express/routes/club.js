const express = require('express')
const Joi = require('@hapi/joi')
const router = express.Router()
const admin = require('firebase-admin');
const { ClubSchema } = require('@clubhub/common/models');


/* GET users listing. */
router.post('/', (req, res, next) => { // , async (req..) =>
    //const db = admin.firestore();
    //await db.collection('clubs').add({
        
    //})
    res.send('respond with a resource')
    const result = ClubSchema.validate(req.body);
    res.send(result);
})



module.exports = router
