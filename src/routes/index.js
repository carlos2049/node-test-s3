import express from 'express';
import uploadPhotos from './upload.routes';

const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    message: 'rutaaa'
  });
});

router.use('/upload', uploadPhotos)

export default router;