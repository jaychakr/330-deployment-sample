require('dotenv').config();
const server = require("./server");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_CONNECT_URI

mongoose.connect(MONGO_URI, {}).then(() => {
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
});