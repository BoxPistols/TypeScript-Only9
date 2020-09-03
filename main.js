"use strict";
exports.__esModule = true;
var fs = require("fs");
function total(data) {
    var t = 0;
    data.forEach(function (item) {
        t += item.count;
    });
    return t;
}
// read json
var content = fs.readFileSync('data.json');
var data = JSON.parse(content.toString());
console.log(total(data));
