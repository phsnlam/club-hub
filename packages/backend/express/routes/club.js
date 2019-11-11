const express = require("express");

const router = express.Router();

const { clubControllers } = require("../../controllers");

const addClub = clubControllers.addClub;
const getAllClub = clubControllers.getAllClubs;
const editClub = clubControllers.editClub;
const deleteClub = clubControllers.deleteClub;

<<<<<<< HEAD
router.put("/", (req, res) => {
  //addClub
  addClub(req.body)
    .then(result => {
      res.status(200).send("Club added");
      return true;
    })
    .catch(e => {
      console.log("error:", e, e.message);
      res.status(400).send({
        error: {
          message: e.message
        }
      });
    });
});

router.get("/", res => {
  //getAllClubs
  getAllClub()
    .then(result => {
      res.status(200).send("Club received");
      return true;
    })
    .catch(e => {
      console.log("error:", e, e.message);
      res.status(400).send({
        error: {
          mesage: e.message
        }
      });
=======

/* GET users listing. */
router.post('/', (req, res, next) => { // , async (req..) =>
    addClub(req.body).then((result)=>{
        res.send('Added Club');
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
        res.send('Club received');
        return true;
    }).catch((e) =>{
        console.log({'error': e + e.message});
        res.send(e.message);
>>>>>>> 625f4054cb540fc644869bf2516e6decbbc6e2fd
    });
});

router.post("/:id", (req, res) => {
  //editClub
  editClub(req.params.id, req.body)
    .then(result => {
      res.status(200).send("successful");
      return true;
    })
    .catch(e => {
      console.log("error:", e, e.message);
      res.status(400).send({
        error: {
          message: e.message
        }
      });
    });
});

router.delete("/:id", (req, res) => {
  //deleteClub
  deleteClub(req.params.id)
    .then(result => {
      res.status(200).send("Club Deleted");
      return true;
    })
    .catch(e => {
      console.log("error:", e, e.message);
      res.status(400).send({
        error: {
          message: e.message
        }
      });
    });
});

module.exports = router;
