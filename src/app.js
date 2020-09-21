import express from 'express';
import morgan from 'morgan';
import routes from './routes';

const app = express();
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({
    message: 'HII'
  });
});

app.use('/api', routes);

module.exports = app;