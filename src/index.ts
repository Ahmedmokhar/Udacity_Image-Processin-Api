// Import needed files
import express from "express";
import processImage from "./middlewares/processImage.middleware";

// Create Express application
const app = express();
const port = 5000;

// Define route handler
app.get("/image", processImage, (req, res) => {
  res.end();
});

// Start Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;