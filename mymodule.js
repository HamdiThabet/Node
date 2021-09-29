var fs = require('fs');
var path = require('path');

/*const myFn = (pathName, ext) => {
    fs.readdir(pathName, (err, list) => {
        list.forEach(file => {
            if (path.parse(file).ext === `.${ext}`)
                console.log(file)

        })
    })
}
module.exports = myFn*/
const myFn = (pathName, ext, cb) => {
    var flist = []
    fs.readdir(pathName, (err, list) => {
        if (err) return cb(err)
        flist = list.filter(file => {
            return path.parse(file).ext === `.${ext}`
        })
        return cb(null, flist)
    })

}
module.exports = myFn