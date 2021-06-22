import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(8000, () => {
  console.log();
});
