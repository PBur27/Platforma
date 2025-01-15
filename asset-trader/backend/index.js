import express from 'express';
import { getDatabase, getHello, getImage } from "./routes/routes.js"
import cors from 'cors';  // Import CORS

const app = express();
const port = 3000;

// Use CORS middleware to allow requests from the React app
app.use(cors());

app.get('/', getHello)

app.get('/db', getDatabase)

app.use('/images/:filename', getImage)

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
