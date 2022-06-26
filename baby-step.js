let value;
for (var i =2; i < arguments.length; i++) {
    value += Number(process.argv[i]);
    console.log(value);
}