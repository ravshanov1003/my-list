const { v4: uuid } = require('uuid')

let lists = require('../data.json')
const { writeDataToFile } = require('../utils')

const readAll = _ => {
    return new Promise((resolve, reject) => {
        resolve(lists)
    })
}

const readById = (id) => {
    return new Promise((resolve, reject) => {
        let list = lists.find(p => p.id === id)
        resolve(list)
    })
}

const create = (list) => {
    return new Promise((resolve, reject) => {
        const newList = {
            id: uuid(),
            ...list
        }
        lists.push(newList)
        writeDataToFile('./data.json', lists)
        resolve(newList)
    })
}

const update = (id, list) => {
    return new Promise((resolve, reject) => {
        let index = lists.findIndex(p => p.id === id)
        lists[index] = { id, ...list }
        writeDataToFile('./data.json', lists)
        resolve(lists)
    })
}

function deleteList(id) {
    return new Promise((resolve, reject) => {
        lists = lists.filter(p => p.id !== id)
        writeDataToFile('./data.json', lists)
        resolve()
    })
}

function change(id) {
    return new Promise((resolve, reject) => {
        const index = lists.findIndex(p => p.id === id);
        if (lists[index].status === "Open") {
            lists[index].status = "Close"
        } else {
            lists[index].status = "Open"
        }

        writeDataToFile('./data.json', lists)
        resolve(lists)
    })
}

module.exports = {
    readAll,
    readById,
    create,
    update,
    deleteList,
    change
}