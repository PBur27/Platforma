import express from 'express';
import { getDatabase, getHello, getImage } from "./routes/routes.js"
import cors from 'cors';

const app = express();
const port = 3000;


app.use(cors());

app.get('/', getHello)

app.get('/db', getDatabase)

app.use('/images/:filename', getImage)


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
