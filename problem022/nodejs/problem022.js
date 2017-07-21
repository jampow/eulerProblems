const fs = require('fs');

const file = fs.readFileSync(__dirname + '/../names.txt')

const names = eval('[' + file.toString() + ']').sort()

const letterPts = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')


console.log(names);
console.log(letterPts);
