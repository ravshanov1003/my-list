const List = require('../models/listModel')
const { writeDataToFile } = require('../utils')

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

async function updateTodo(req, res) {
    const { id } = req.params;
    const { title, description, status, createdAt, priority } = req.body
    try {
        const list = await List.readById(id)
        if (!list) {
            res.status(404).send({
                message: 'list not founded'
            })
        } else {
            const listData = {
                title: title || list.title,
                description: description || list.description,
                status: status || list.status,
                createdAt: createdAt || list.createdAt,
                priority: priority || list.priority
            }
            const newList = await List.create(listData)
            res.send(newList)
        }
    } catch (e) {
        console.log(e, 'updateTodo error')
    }
}

async function deleteTodo(req, res) {
    const { id } = req.params
    try {
        const list = await List.readById(id)
        if (!list) {
            res.status(404).send({
                message: 'List not founded'
            })
        } else {
            await List.deleteList()
            res.send({
                message: 'List has been deleted'
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,

}