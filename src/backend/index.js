const express = require("express");
const path = require("path");
const app = express();
const mealsRouter = require("./api/meals");
const router = express.Router();
require("dotenv").config();

const port = process.env.PORT || 5000;

const buildPath = path.join(__dirname, "../../dist");
app.use(express.static(buildPath));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

router.use("/meals", mealsRouter);

app.use("/api", router);

app.get("/*", (req, res) => {
  const indexPath = path.join(__dirname, "./../../dist/index.html");
  res.sendFile(indexPath, function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
