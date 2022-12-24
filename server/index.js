let express = require("express");
let app = express();
const cors = require('cors')
let port = process.env.PORT || 3000;

app.use(cors())
app.listen(port);

app.route("/test").get((req, res) => {
  return res.status(200).json({ success: true });
});

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

console.log("RESTful API server started on: " + port);
