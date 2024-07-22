import express from "express";

const app = express();
app.use(express.static("public"));

const names = async (randInt) => {
  const url = await fetch(`https://swapi.dev/api/people/${randInt}`);
  const result = await url.json();
  return result.name;
};

app.get("/", async (req, res) => {
  let randInt = Math.floor(Math.random() * 80);
  const getName = await names(randInt);
  res.render("index.ejs", { getName });
});

app.listen(3000, () => console.log("Jokes Server Started"));
