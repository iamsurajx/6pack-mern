```javascript

const express = require("express");
const mongoose = require("mongoose");
const PORT = 4030;
const app = express();
const DB_URI = "mongodb://localhost:27017";

//middleware
app.use(express.json());

mongoose.connect(DB_URI, {
  dbName: "backendapi",
}).then(
  function () {
    console.log("Database is Connected...")
  }
).catch(
  function (e) {
    console.log(`Error in connecting with mongodb`, e)
  }
)

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", schema);

app.get("/", function (request, response) {
  response.send("Home Page");
});

app.get("/users/all", async function (request, response) {
  const users = await User.find({});

  console.log(request.query)

  response.json({
    success: true,
    users: [],
  });
});

app.post("/users/new", async function (request, response) {

  //take input and pass to User
  const { name, email, password } = request.body;

  await User.create({
    name,
    email,
    password,
  });

  response.status(201).cookie("tempi", "lol cookie").json({
    success: true,
    message: "Register Successfully....",
  })
})

app.get("/userid", async (request, response) => {
  const { id } = request.body;
  const user = await User.findById(id);

  response.status(200).json({
    success: true,
    user,
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`)
})

```