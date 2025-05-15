const express = require("express");
const router = express.Router();

router.use("/items", require('./items'));

router.use(express.static(__dirname + '/../deployment-sample-frontend/dist'))
// router.get("/", (req, res, next) => {
//   res.send(`
//     <html>
//       <body>
//         <h1> Hello, world! </h1>
//         <h1>Welcome to the Express server</h1>
//       </body>
//     </html>
//   `)
// });

module.exports = router;