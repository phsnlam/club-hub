const express = require("express");

const router = express.Router();

const { clubControllers } = require("../../controllers");

const addClub = clubControllers.addClub;
const getAllClub = clubControllers.getAllClubs;
const editClub = clubControllers.editClub;
const deleteClub = clubControllers.deleteClub;

/* GET users listing. */
router.put("/", (req, res, next) => {
  // , async (req..) =>
  addClub(req.body)
    .then(result => {
      res.send("successful");
      return true;
    })
    .catch(e => {
      console.log("There is an error:");
      console.log(e);
      console.log(e.message);
      res.send(e.message);
    });
  //res.send('respond with a resource')
});

router.get("/", (req, res, next) => {
  getAllClub()
    .then(result => {
      res.send("successful");
      return true;
    })
    .catch(e => {
      console.log({ error: e + e.message });
      res.send(e.message);
    });
});

router.post("/:id", (req, res, next) => {
  //console.log("REQUEST", req.body.name)

  editClub(req.params.id, req.body)
    .then(result => {
      res.send("successful");
      return true;
    })
    .catch(e => {
      console.log("error here");
      console.log("error:", e, e.message);
      res.send({
        error: {
          message: e.message
        }
      });
    });
});

router.delete("/:id", (req, res) => {
  deleteClub(req.params.id)
    .then(result => {
      res.send("Club Deleted");
      return true;
    })
    .catch(e => {
      console.log({ error: e + e.message });
      res.status(400);
      res.send(e.message);
    });
});

module.exports = router;
