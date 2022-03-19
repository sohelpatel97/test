const fs= require('fs')
const csv = require('csv-parser');
const result = []

fs.createReadStream("deliveries.csv").pipe(csv({})).on('data',(data)=> result.push(data)).on('end',()=>{console.log(result);});


// fs.readFile('active listening.txt','utf-8',(err,data)=>{

// console.log(data);})

// const h ="take notes,direct your body toward person who talking,chin up,no intrupption and listen ntil they finish"

// fs.writeFile('active listening.txt',h,(err)=>{

//     console.log("data saved")
// });