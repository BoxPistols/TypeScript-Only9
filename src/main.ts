import * as fs from "fs"

// const fs = require("fs")

interface Data {
    name: string,
    count: number
}
function total(data: Data[]) {
    let t = 0
    data.forEach((item) => {
        t += item.count
    })
    return t
}
// read json
const content = fs.readFileSync('data.json')
const data: Data[] = JSON.parse(content.toString())
console.log(total(data))