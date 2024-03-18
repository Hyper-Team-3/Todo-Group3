const express = require('express')
const router = express.Router()
const taskApi = require('./taskApi')
const loginApi = require('./loginApi')
const signUpApi = require('./signUpApi')

router.use("/todos", taskApi)
router.use("/login", loginApi)
router.use("/signup", signUpApi)



module.exports = router