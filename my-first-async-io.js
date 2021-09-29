var fs = require("fs")
var file = process.argv[2]
fs.readFile(file, 'utf-8', (err, data) => {
    console.log(data.split('\n').length - 1)
})

