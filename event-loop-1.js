const fs = require('fs');

const a = 100;

setImmediate(()=>{
    console.log("setImmediate - done");
})

fs.readFile("./textFile.txt", "utf-8", () =>{
    console.log("file read competed");
})


setTimeout(()=>{
    console.log("setTimeout - done");
},0)


function printA(){
    console.log("a=", a);
}

printA();