const fs =  require('fs');

let buf = fs.readFileSync(process.argv[2]);

let string = buf.toString();

let numberOfLines = string.split('\n').length;

console.log(numberOfLines - 1);