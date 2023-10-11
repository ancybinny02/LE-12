//fs-file system
const fs=require('fs');
const path=require('path');

// fs.writeFile('Sample.txt',"Hello World",(err)=>{
//     console.log('Content Updated');
// })

// fs.readFile("Sample.txt", 'utf-8', (err,data)=>{
//     console.log(data);
// })

fs.writeFile(path.join(__dirname, 'posts', 'BlogPost.txt'),'Hello',(err)=>{
    if(err){
        throw err;
    }
    console.log('File created.');
})

