import express from "express";
import {
  uploadPhoto
} from "../controllers/UploadController";
import path from 'path';
import multer from 'multer';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config()

const accessKeyId = process.env.aws_access_key_id;
const secretAccessKey = process.env.aws_secret_access_key;

const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey
});

// s3.listBuckets({}, (err, data) => {
//   if (err) throw err;
//   console.log(data)
// })

const parametros = {
  Bucket: 'gestiona-data'
}

s3.listObjectsV2(parametros, (err, data) => {
  if (err) throw err
  console.log(data)
})


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