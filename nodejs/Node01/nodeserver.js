const http = require('http');
http
.createServer((req,res) =>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello from node web server');
    res.end();
})
.listen(80);
console.log('one');
console.log('two');
console.log('three');