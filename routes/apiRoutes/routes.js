const { db } = require("../../db/db.json");
const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

//check saved notes if exist or not
const savedNotes = fs.readFileSync("./db/db.json", "UTF-8");
if (savedNotes) {
  let oldNotes = JSON.parse(savedNotes);
  notes = oldNotes;
} else {
  notes = [];
}

router.get("/notes", (req, res) => {
    return res.json(notes);
  });

  router.post("/notes", function (req, res) {

    let noteId = uuidv4();
  
    let newNote = {
      id: noteId,
      title: req.body.title,
      text: req.body.text,
    };
   
    console.log(newNote);
    notes.push(newNote);
    
    res.json(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2), function (
      err
    ) {
      if (err) throw err;
    });
  });