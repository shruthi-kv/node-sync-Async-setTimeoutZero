const fs = require('fs')

setImmediate(()=>{
    console.log("setImmediate -  done")
})

setTimeout(()=>{
    console.log("setTimeout -  done")
})

Promise.resolve('promise').then(console.log)

fs.readFile('./textFile.txt', "utf-8", ()=>{

    setTimeout(()=> console.log("2nd settimeout"))

    process.nextTick(()=> console.log("2nd nextTick"))

    setImmediate(()=>{
        console.log("2nd immediate")
    })
  
    console.log("file read completed")
})

process.nextTick(()=>{
 console.log("process-nextTick")
})

console.log("last line of the file")