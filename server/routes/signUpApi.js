const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db");

// Signup

router.post('/', async (req, res) => {
  const { email, password } = req.body
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)

  try {
    const signup = await pool.query(`INSERT INTO users (email, hashed_password) VALUES($1, $2)`, [email, hashedPassword])
    const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})
    res.json({email, token})

  } catch (err) {
    console.error(err)
    if(err){
      res.json({detail: err.detail})
    }
  }
})

module.exports = router;
