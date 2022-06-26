let value = 0;
var loop = process.argv.length;

for (let i = 2; i < loop; i++) {
    value += Number(process.argv[i]);
}

console.log(value);