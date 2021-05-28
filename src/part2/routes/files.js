import { is } from "bluebird";
import express from "express"
import fs from "fs";

const router = express.Router();
const basePath = process.cwd();
const filesBasePath = basePath + "/" + "files/readme/";

/* GET /files/:fileName */
router.get('/:fileName', async (req, res, next) => {
  let file = req.params.fileName;
  let fileMetadata = await getFileMetadata(file);
  if (!fileMetadata) {
    return res.status(404).send({
      "error": "file not found!",
      "code": 404
    })
  }
  return res.status(200).send({
    filename: file,
    length: fileMetadata.length,
    content: fileMetadata
  })
});


/** gets file metadata from file */
const getFileMetadata = async (file) => {
  let filePath = filesBasePath + file;
  try {

    return await fs.promises.readFile(filePath, "utf-8");
  }
  catch (err) {
    if (err.code !== 'ENOENT') throw err;
    return false;
  }

}

export default router
