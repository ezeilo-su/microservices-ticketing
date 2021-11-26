import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

const app = express();

app.use(json());
app.use(morgan('tiny'));
app.use(urlencoded({ extended: true }));

app.get('/api/users/currentuser', (req, res) => {
  res.json({
    status: 'success',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
