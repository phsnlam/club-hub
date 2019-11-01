const express = require('express')

const router = express.Router()


const {clubControllers} = require('../../controllers');

const addClub = clubControllers.addClub;
const getAllClub = clubControllers.getAllClubs;
const editClub = clubControllers.editClub;

/* GET users listing. */
router.post('/', (req, res, next) => { // , async (req..) =>
    addClub(req.body).then((result)=>{
        res.send('successful');
        return true;
    }).catch((e)=>{
        console.log('There is an error:')
        console.log(e);
        console.log(e.message);
        res.send(e.message);
    });
    //res.send('respond with a resource')
    
})

router.get('/', (req, res, next) => {
    getAllClub().then((result)=>{
        res.send('successful');
        return true;
    }).catch((e) =>{
        console.log({'error': e + e.message});
        res.send(e.message);
    });
})

router.edit('/', (req, res, next) => {
    console.log();
    return true;
})



module.exports = router
