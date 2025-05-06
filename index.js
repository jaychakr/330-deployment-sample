require('dotenv').config();
const server = require("./server");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGO_CONNECT_URI = process.env.MONGO_CONNECT_URI

mongoose.connect(MONGO_CONNECT_URI).then(() => {
  server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
});