const users = require('../data/users.json')

async function findUser(username) {
    return new Promise((resolve, reject) => {
        const user = users.find(p => p.username === username)
        resolve(user)
    })
}

module.exports = { findUser }