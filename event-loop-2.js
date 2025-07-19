const fs = require("fs");


const a = 100;


setImmediate(()=>{
    console.log("setImmediate -  done")
})

Promise.resolve("Promise").then(console.log);

fs.readFile('./textFile.txt', "utf-8", ()=>{
    console.log("file read completed")
})



printA()
