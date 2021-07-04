"use strict";
const singlefile = require("../models/singleFile");
const multipfiles = require("../models/multipeFile");

const singlefileUpload = async (req, res, next) => {
    try {
        const file = new singlefile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            filetype: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2)
        });
       // res.send(req.file);
        await file.save();
        res.send("file uploades!!!!!!!");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
}

//musltip files upload
const multipfilesUpload = async (req, res, next) => {
    try {
        let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                filetype: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            filesArray.push(file);
        });
        const multipefiles = new multipfiles({
            title: req.body.title,
            files: filesArray
        })
        await multipefiles.save();
        res.send(" all files uploades!!!!!!!");
    }
    catch (err) {
        res.status(400).send(err.message);
    }
}

//get files
const getallsinglefiles = async (req, res, next) => {
    try {
        const files = await singlefile.find();
        res.send(files);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
}

const getallMultipfiles = async (req, res, next) => {
    try {
        const files = await multipfiles.find();
        res.send(files);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
}

//delete files


const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];
}

module.exports = { singlefileUpload, multipfilesUpload ,getallsinglefiles,getallMultipfiles};