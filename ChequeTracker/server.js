// server.js
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Welcome to Cheque Tracker System');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (e.g., CSS, JS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files (e.g., HTML) from the 'views' folder
app.use(express.static(path.join(__dirname, 'views')));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

