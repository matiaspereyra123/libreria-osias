const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/images/users"))
    },
    filename: function (req, file, cb) {
      let imageName=Date.now()+path.extname(file.originalname);
      cb(null,imageName);
    }
  })
  
const upload = multer({ storage: storage })

module.exports = upload;