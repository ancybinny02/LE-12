const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname,'/blogs'),(err)=>{
    if(err){
        console.log(err);
        console.log('Folder with that name already exists.');
        return;
    }
    console.log('Posts folder created.');
});