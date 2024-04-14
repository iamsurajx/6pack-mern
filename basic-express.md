import express from "express";
import path from "path";
const application = express();
const PORT = 3001;

// send text 
application.get("/", function (request, response) {
  response.send("This Home Page By express..");
});

// send the json data from express
application.get("/json-data", (request, response) => {
  response.json({
    success: true,
    products: [],
  });
});

application.get("/send-file", function (request, response) {
  const pathlocation = path.resolve();
  console.log(path.join(pathlocation, "./index.html"));
  response.sendFile(file);
});

application.listen(PORT, function () {
  console.log(`server is running on http://localhost:${PORT}`)
})