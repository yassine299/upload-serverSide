const mongoose = require("mongoose")

const Shema = mongoose.Schema;

const singleFileShema = new Shema({
    fileName: {
        type: String,
        require: true
    },
    filePath: {
        type: String,
        require: true
    },
    fileType: {
        type: String,
        require: true
    },
    fileSize: {
        type: String,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Singlefile", singleFileShema);