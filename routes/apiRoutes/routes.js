const { db } = require("../../db/db.json");
const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");