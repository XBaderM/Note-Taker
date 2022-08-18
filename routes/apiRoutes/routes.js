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