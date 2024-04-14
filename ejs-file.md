```bash
views
    |--index.ejs
app.js  

```

### index.ejs
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EJS File</title>
</head>
<body>
  <h1>Home</h1>
  <p>Hello <%=name %></p>
</body>
</html>
```

### app.js
```javascript
import express from "express";
import path from "path";
const app = express();
const PORT = 4545;

app.use(express.static(path.join(path.resolve(), "public")));

// middleware 
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Yo Yo" });
});



app.listen(PORT, () => {
  console.log(`SERVER http://localhost:${PORT}`);
})
```