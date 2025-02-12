const multer = require("multer");
const path = require("path");
const tempDir = path.join(__dirname, "../", "temp");
console.log("Temp directory:", tempDir);
const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        console.log("Received file:", file.originalname);
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: multerConfig,
})

module.exports = upload;