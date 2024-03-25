const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db");

// Signup

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email))
    return res.status(400).json({ detail: "Invalid email" });

  try {
    const signUp = await pool.query(
      "INSERT INTO users (email, hashed_password) VALUES($1, $2)",
      [email, hashedPassword]
    );
    if (signUp.rowCount === 0)
      return res.status(500).json({ detail: "Sign up failed" });
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });
    res.json({ email, token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
});

module.exports = router;
