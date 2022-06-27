const fs = require('fs');
const path = require('path');



fs.readdir(process.argv[2],(err, list)=>{
    if (err) throw err;
    let extension = `.${process.argv[3]}`    
    for (var i of list){
        if (path.extname(i)==extension) console.log(i); 
    }
})