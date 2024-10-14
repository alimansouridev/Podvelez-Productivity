const express = require("express");

const app = express();

const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruits: ["test1", "test2", "test3", "test4", "test5"] });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
