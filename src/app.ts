import express from "express";

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  const info = { name: `Abdullah` };
  res.json(info);
});

app.listen(8000, () => {
  console.log(" my server is runing");
});
