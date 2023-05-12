const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const storesRouter = require("./router/store.router");
const bookRouter = require("./router/book.router");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello from the book store api!");
});
app.use("/api/v1", storesRouter);
app.use("/api/v1", bookRouter);

app.use((req, res) => res.status(404).send({ error: "404 not found" }));

app.listen(3000, (err) => {
  console.log("server started on http://localhost:3000");
});
