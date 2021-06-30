import express from "express";
import cors from "cors";
import db from "./db.js";
import TypingTestScore from "./db/models/TypingTestScore.js";
import passport from "passport";
import GitHubStrategy from "passport-github";
import session from "express-session";

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GitHubStrategy(
    {
      clientID: "6f9f2f91bde7e6847b60",
      clientSecret: "17459047d0343c5ba8728065a296f1e2db1959e7",
      callbackURL: "http://localhost:8000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      cb();
    }
  )
);

db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.get("/scores", async (req, res) => {
  const scores = await TypingTestScore.findAll();
  res.json(scores);
});

app.post("/scores", async (req, res) => {
  await TypingTestScore.create(req.body);
});

app.get("/auth", passport.authenticate("github"), async (req, res) => {
  console.log("what");
});

app.listen(8000, () => {});
