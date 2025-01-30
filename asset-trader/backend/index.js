import express from "express";
import cors from "cors";
import { getDatabase, getHello, getImage, registerUser, loginUser } from "./routes/routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Routes
app.get("/", getHello);
app.get("/db", getDatabase);
app.get("/images/:filename", getImage);
app.post("/register", registerUser); // Register endpoint
app.post("/login", loginUser);       // Login endpoint

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
