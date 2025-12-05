const fs = require('fs');
const http = require('http');

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `this is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written successfully!');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);
//             // Peak of call back hell, will learn about this later
//             fs.writeFile('./txt/final.txt', `${data1}\n${data3}`,'utf-8', err => {
//                 console.log("Your file has been written :)")

//             });
//         });
//     });
// });

// console.log('Will read file!');


//////////////////////////////////
// SERVER CODE

const server = http.createServer((req, res) => {
    // console.log(req);
    res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});