var fs = require('fs');
var path = require('path');

/* fs.readdir(process.argv[2], function (err, list) {
    if (err) throw err
    list.forEach(function (file) {
        if (path.parse(file).ext === '.' + process.argv[3]) {
            console.log(file);
        }
    });
}); */

fs.readdir(process.argv[2], (err, list) => {
    list.forEach(file => {
        if (path.parse(file).ext === `.${process.argv[3]}`)
            console.log(file)

    })
})