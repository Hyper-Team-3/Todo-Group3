const express = require('express')
const {v4: uuidv4} = require('uuid') // creates unique ids for the todos
const router = express.Router()
const pool = require('../db')


// Get all todos

router.get('/:userEmail', async (req, res) =>{
  const { userEmail } = req.params

  try {
    const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
    res.json(todos.rows)
  } catch (err) {
    console.error(err.message)
  }
})

// Create new todos

router.post('/', async (req, res) => {
  try {
    const {user_email, title, progress, date} = req.body
    console.log(user_email, title, progress, date)
    const id = uuidv4()
    const newTodo = await pool.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1,$2,$3,$4,$5)`, [id, user_email, title, progress, date])
    res.json(newTodo)
  } catch (err) {
    console.error(err.message);
  }
})

// Edit todo

router.put('/:id', async (req, res) => {
  const {id} = req.params
  const {user_email, title, progress, date} = req.body
  try {
    const editTodo = await pool.query('UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;', [user_email, title, progress, date, id])
    res.json(editTodo)
  } catch (err) {
    console.error(err.message);
  }
})

// Delete todo

router.delete('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const deleteTodo = await pool.query('DELETE FROM todos WHERE id = $1;', [id])
    res.json(deleteTodo)
  } catch (err) {
    console.error(err.message);
  }
})



module.exports = router