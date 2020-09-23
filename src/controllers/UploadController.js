import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config()

export const uploadPhoto = async (req, res) => {
  const data = req.file
  await envio(sendData)

  res.send("subido");
};


const sendData = (data) => {

  const dataName = data.originalname
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey
  });

  const parametros = {
    Bucket: 'gestiona-data'
  }

  const paramPutObject = {
    Bucket: 'gestiona-data',
    Key: dataName,
    Body: data.buffer
  }
  s3.putObject(paramPutObject, (err, data) => {
    if (err) throw err;
    console.log(data)
  })

}