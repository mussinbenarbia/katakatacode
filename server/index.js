import express from "express";
import cors from "cors";
import db from "./db.js";
import TypingTestScore from "./db/models/TypingTestScore.js";

db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(8000, () => {});

const testEntry = TypingTestScore.build({
  userId: "test",
  completionTimestamp: "tesst",
  charsPerMinute: 33,
});

testEntry.save().then((res) => {
  console.log("saved");
});
