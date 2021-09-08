const { Router } = require("express")

const { getTodos, getTodo, createTodo, updateTodo, deleteTodo, changeStatus } = require('../controllers/listController')

const router = Router()

router.get('/', getTodos)
router.get('/:id', getTodo)
router.post('/', createTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)
router.put('/:id', changeStatus)

module.exports = { router }