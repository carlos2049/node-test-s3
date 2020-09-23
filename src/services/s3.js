import AWS from 'aws-sdk';

export const getBucket = (key, data) => {
  return {
    Bucket: process.env.BUCKET,
    Key: key,
    Body: data.buffer
  }
}

export default new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,

});