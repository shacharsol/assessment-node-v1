import express from "express"
import fs from "fs";

const router = express.Router();
const basePath = process.cwd();
const filesBasePath = basePath+"/"+"files/readme/";
/* GET /files/:fileName */

router.get('/:fileName', function(req, res, next) {
  let file = req.params.fileName;
  
  fs.access(filesBasePath+file, fs.constants.F_OK | fs.constants.R_OK, (err) => {
    if (err) {
      
      res.status(404).send({
          "error": "file not found!",
          "code": 404
        })        
    
    } else {      
        const metadata = fs.readFileSync(filesBasePath+file,{encoding:'utf-8'}    );   
        res.status(200).send({
          filename: file,
          length: metadata.length,
          content: metadata
          })
        }
});

  
});

export default router
