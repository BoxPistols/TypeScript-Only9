// import * as fs from "fs"

const fs = require("fs")

function total(data) {
    let t = 0
    data.forEach((item) => {
        t += item.count
    })
    return t
}
// read json
const data = JSON.parse(fs.readFileSync('data.json'))
console.log(total(data))