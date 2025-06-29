// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     res.end('Hello form node js')
// })

//Reading
// fs.readFile('sample.txt','utf8', (err, data) => {
//     if(err) return console.error(err);
//     console.log(data);
// });

//writing
// fs.writeFile('output.txt','Hello this is written by node js!',(err) => {
//     if(err) throw err;
//     console.log('File has been written');
// })
//for allllllll
// server.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });


//JSON API server
// const data = {
//     name:"node.js",
//     type:"Runtime",
//     language:"Javascript"
// }

// http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(data));
// }).listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });

//Console timer
// console.log('Starting timer...');
// setTimeout(() => {
//     console.log('3 seconds have passed');
// },3000);

//File uploaded
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

app.post('/upload', (req, res) => {
    let file = req.files.myfile;
    file.mv(`./uploads/ ` + file.name, err => {
        if (err) return res.status(500).send(err);
        res.send('File uploaded');
    });
});

app.listen(3000, () => console.log('Server on http://localhost:3000'));