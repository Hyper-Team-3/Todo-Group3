const express = require("express");
const { v4: uuidv4 } = require("uuid"); // creates unique ids for the todos
const router = express.Router();
const pool = require("../db");

/**
 * @swagger
 * tags:
 *    name: Tasks API
 *    description: Tasks managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         user_email:
 *           type: string
 *         title:
 *           type: string
 *         progress:
 *           type: string
 *         date:
 *           type: string
 */

// Get all todos

/**
 * @swagger
 * /todos/{userEmail}:
 *   get:
 *     summary: Get todos by user email
 *     tags: [Tasks API]
 *     parameters:
 *       - in: path
 *         name: userEmail
 *         required: true
 *         description: User's email address
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */

router.get("/:userEmail", async (req, res) => {
  const { userEmail } = req.params;

  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Create new todos

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Tasks API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewTodo'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */

router.post("/", async (req, res) => {
  try {
    const { user_email, title, progress, date } = req.body;
    console.log(user_email, title, progress, date);
    const id = uuidv4();
    const newTodo = await pool.query(
      `INSERT INTO todos(id, user_email, title, progress, date) VALUES($1,$2,$3,$4,$5)`,
      [id, user_email, title, progress, date]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

// Edit todo

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Edit a todo by ID
 *     tags: [Tasks API]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Todo ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewTodo'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { user_email, title, progress, date } = req.body;
  try {
    const editTodo = await pool.query(
      "UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;",
      [user_email, title, progress, date, id]
    );
    res.json(editTodo);
  } catch (err) {
    console.error(err.message);
  }
});

// Delete todo

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     tags: [Tasks API]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Todo ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await pool.query("DELETE FROM todos WHERE id = $1;", [
      id,
    ]);
    res.json(deleteTodo);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
