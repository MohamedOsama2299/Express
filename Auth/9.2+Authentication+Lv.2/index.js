import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;
const saltRounds = 10;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123456",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});


app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/secrets", (req, res) => {
  if (req.session.user) {
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});



app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkUser = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (checkUser.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const result = await db.query(
        "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
        [email, hashedPassword]
      );

      req.session.user = result.rows[0];
      res.redirect("/secrets");
    }
  } catch (err) {
    console.log(err);
  }
});



app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];

      const validPassword = await bcrypt.compare(
        password,
        user.password
      );

      if (validPassword) {
        req.session.user = user;
        res.redirect("/secrets");
      } else {
        res.send("Incorrect Password");
      }
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});