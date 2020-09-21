import express from "express";
import {
  uploadPhoto
} from "../controllers/UploadController";
import path from 'path';

import multer from 'multer';

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/uploads'),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});


const up = (multer({
  storage,
  dest: path.join(__dirname, 'public/uploads')
}).single('image'))

const router = express.Router();

router.post("/", up, uploadPhoto);

export default router;