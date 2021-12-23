const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV;


if(environment == "development") {
  console.log("serving public dir using node");
  app.use(express.static("public"));
}


nunjucks.configure("templates", {
  autoescape: true,
  express: app
})


app.get('/', (req, res) => {
  res.render("pages/homepage.html")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})