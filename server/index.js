import express from "express";
import cors from "cors";
import db from "./db.js";
import TypingTestScore from "./db/models/TypingTestScore.js";

db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.get("/scores", async (req, res) => {
  const scores = await TypingTestScore.findAll();
  res.json(scores);
});

app.post("/scores", async (req, res) => {
  await TypingTestScore.create(req.body);
});

app.listen(8000, () => {});
