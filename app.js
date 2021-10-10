//Initial variables
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

// Setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Setting static files
app.use(express.static("public"));

// Handle request and response here
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
// Start and listen the server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
