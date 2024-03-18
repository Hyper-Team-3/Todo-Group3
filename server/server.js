const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const indexRouter = require('./routes/index')
const app = express()


app.use(cors())
app.use(express.json())
app.use(indexRouter)





app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})