// routes.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Convert `import.meta.url` to `__dirname` equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths relative to the project root
const usersData = path.resolve(__dirname, "../../database/accounts.json");
const assetsData = path.resolve(__dirname, "../../database/assets.json");
const imagesPath = path.resolve(__dirname, "../../database/images/top asset icons");

// Load users from JSON
const loadUsers = () => {
    try {
        return JSON.parse(fs.readFileSync(usersData, "utf8"));
    } catch (error) {
        return [];
    }
};

// Save users to JSON
const saveUsers = (users) => {
    fs.writeFileSync(usersData, JSON.stringify(users, null, 2), "utf8");
};

// Register a new user
export const registerUser = (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    let users = loadUsers();

    if (users.some((user) => user.email === email)) {
        return res.status(400).json({ message: "Email already registered." });
    }

    const newUser = { username, email, password };
    users.push(newUser);
    saveUsers(users);

    res.status(201).json({ message: "User registered successfully!" });
};

// Login user
export const loginUser = (req, res) => {
    const { email, password } = req.body;

    let users = loadUsers();

    // Check if the user exists and the password matches
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful", user });
};

// Test Route
export const getHello = (req, res) => {
    res.send("Hello, this is my App");
};

// Get database
export const getDatabase = (req, res) => {
    fs.readFile(assetsData, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading db" });
        }
        res.json(JSON.parse(data));
    });
};

// Serve Images
export const getImage = (req, res) => {
    const { filename } = req.params;
    const imagePath = path.join(imagesPath, filename);

    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).json({ message: "Image not found" });
    }
};
