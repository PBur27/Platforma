import fs from "fs"
import path from "path";

export const getHello = (req, res) => {
  res.send('Hello, this is my App');
};

export const getDatabase = (req, res) => {
  fs.readFile('../database/assets.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading db' })
    }

    const file = JSON.parse(data);
    res.json(file)
  })
};

export const getImage = (req, res) => {
  const { filename } = req.params;
  const imagePath = path.resolve('../database/images/top asset icons/', filename);

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    res.json({path: imagePath})
    res.status(404).json({ message: 'Image not found' });
  }
};
