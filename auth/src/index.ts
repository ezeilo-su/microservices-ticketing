import express, { json, urlencoded } from 'express';
// import { json, urlencoded } from 'express';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
