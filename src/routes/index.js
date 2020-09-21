import express from 'express';
import upload from './upload.routes';

const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    message: 'HII'
  });
});

router.use('/upload', upload)

export default router;