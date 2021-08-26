const List = require('../models/listModel')

async function getTodos(req, res) {
    try {
        const list = await List.readAll()
        res.send(list)
    } catch (error) {
        console.log(error)
    }
}

async function getTodo(req, res) {
    try {
        const { id } = req.params
        const list = await List.readById(id)
        if (!list) {
            res.status(404).send({
                message: 'list not founded'
            })
        } else {
            res.send(list)
        }
    } catch (e) {
        console.log(e)
    }
}

async function createTodo(req, res) {
    const { title, description, status, createdAt, priority } = req.body
    const list = {
        title,
        description,
        status,
        createdAt,
        priority
    }
    try {
        const newList = await List.create(list)
        res.send(newList)
    } catch (e) {
        console.log(e, 'createTodo error')
    }
}

module.exports = {
    getTodos,
    getTodo,
    createTodo,

}