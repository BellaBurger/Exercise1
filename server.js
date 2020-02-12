/*
//Example 1
console.log("this is a server now");
*/



/*
//Example 2: Create an html on port 3000 
var http = require("http");
http.createServer(function(req, res){
    res.writeHead("200", {'Content-Type': 'text/html'});
    res.end('Hello World!');
    }).listen(3000);
*/




//Example 3: Import own module
var http = require("http");
var ownModules = require('./module');

http.createServer(function(req, res){
    res.writeHead("200", {'Content-Type': 'text/html'});
    //res.write('Hi today is the' + ownModules.date());
    res.write(ownModules.date());
    res.write(ownModules.person.firstname);
}).listen(3000);




/*
//Example 4: read an html file
var http = require("http");
var fs = require('fs')

http.createServer(function(req, res){
    fs.readFile('login.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
    }).listen(3000);
*/



/*
//Example 5: read from URL
var http = require("http");
var url = require('url')

http.createServer(function(req, res){
    res.writeHead("200", {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(3000);
*/



/*
//Example 6: Use express to build your server
//npm modules
const express = require('express');

// create the server
const app = express();

// tell the server what port to listen on
app.listen(3000, () => {
  console.log('Listening on localhost:3000')
})

// create the homepage route at '/'
app.get('/name', (req, res) => {
    res.send('Welcome to the home page\n')
    console.log(req);

  })
*/


/*
1. Now install nodemon: npm install nodemon. this installs it locally.
2. to use nodemon in your terminal write npx nodemon server.js 
3.now add console.log(req) to app.get. Nodemon will now automatically restart your server
*/