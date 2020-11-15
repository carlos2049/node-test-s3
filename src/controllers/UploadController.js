import s3, {
  getBucket
} from '../services/s3';


export const uploadPhoto = async (req, res) => {
  const data = req.file
  await sendData(data)

  res.send("subido");
};


const sendData = async (data) => {
  const dataName = `users/${data.originalname}`;
  const paramPutObject = await getBucket(dataName, data)

  s3.putObject(paramPutObject, (err, data) => {
    if (err) throw err;
    console.log(data)
  });

}