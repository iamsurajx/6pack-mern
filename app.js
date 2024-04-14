import express from "express";
import path from "path";
// import body-parser from "body-parser";
const app = express();
const PORT = 4545;

app.use(express.static(path.join(path.resolve(), "public")));

// middleware 
app.set("view engine", "ejs");

// middleware to access data from html page
app.use(express.urlencoded({ extended: true }));

// rendering the index,ejs file on the "/" 
app.get("/", (req, res, next) => {
  res.render("index");
});

app.post("/", (req, res) => {
  console.log(req.body);
});



app.listen(PORT, () => {
  console.log(`SERVER http://localhost:${PORT}`);
})