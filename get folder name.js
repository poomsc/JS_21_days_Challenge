const testFolder = './public';
const fs = require('fs');

let fileName = fs.readdirSync(testFolder)
console.log(fileName)