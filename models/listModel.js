const { v4: uuid } = require('uuid')

const lists = require('../data.json')
const { writeDataToFile } = require('../utils')

const readAll = _ => {
    return new Promise((resolve, reject) => {
        resolve(lists)
    })
}

const readById = (id) => {
    return new Promise((resolve, reject) => {
        const list = lists.find(p => p.id === id)
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
        writeDataToFile('../data.json', lists)
        resolve(newList)
    })
}

module.exports = {
    readAll,
    readById,
    create
}