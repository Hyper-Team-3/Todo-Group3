const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db");

// Login

router.post('/', async (req, res) => {
  const { email, password } = req.body
  console.log(email, password, "req.body")

  try {
    const users = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if(!users.rows.length) return res.json({detail: 'User does not exist.'})
    const success = await bcrypt.compare(password, users.rows[0].hashed_password)
    const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})
    if(success){
      res.json({'email' : users.rows[0].email, token})
    } else {
      res.json({ detail: "Login failed"})
    }
  } catch (err) {
    console.error(err.message)
  }
})

module.exports = router;
