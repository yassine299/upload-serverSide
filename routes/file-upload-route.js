"use strict";

const express = require("express");
const { upload } = require("../helpers/fileHelper");
const { singlefileUpload, multipfilesUpload, getallsinglefiles,getallMultipfiles } = require("../controlles/fileuploadController");
const route = express.Router();


route.post("/singlefile", upload.single("file"), singlefileUpload);
route.post("/multipfiles", upload.array("files"), multipfilesUpload);
route.get("/getSingleFiles", getallsinglefiles);
route.get("/getMultipleFiles", getallMultipfiles);

module.exports = {
    routes: route
}