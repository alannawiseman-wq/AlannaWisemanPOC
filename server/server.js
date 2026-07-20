
// Loads code from other files/packages.
const express = require("express");           
const path = require("path");                  
const foodData = require("./foodData");        

// Create the Express application object.
const app = express();

// Lets the server understand JSON data in requests.
app.use(express.json());

// Serve the static frontend files from the public folder
app.use(express.static(path.join(__dirname, "..", "public")));

// GET /foods Route
app.get("/foods", (req, res) => {
  console.log("GET /foods route was called");

  const foods = foodData.getAll();             
  console.log("Sending back these foods:", foods);

  res.status(200).json(foods);                
});

// 404 Handler
app.use((req, res) => {
  console.log("404 - route not found:", req.originalUrl);
  res.status(404).json({ error: "Not Found" });
});

// Start the server
const PORT = process.env.PORT || 3000;

// Console log
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
  });
}

// Export the app.
module.exports = app;