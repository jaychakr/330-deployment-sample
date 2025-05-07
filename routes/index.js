const { Router } = require("express");
const router = Router();

router.use("/items", require('./items'));
router.get("/", (req, res, next) => {
  res.send(`
    <html>
      <body>
        <h1> Hello, world! </h1>
        <h1>Welcome to the Express server</h1>
      </body>
    </html>
  `)
});

module.exports = router;