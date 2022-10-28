const http = require('http'); 
const fs = require('fs'); 
  
const server = http.createServer(function (req, res) { 
    console.log('you are on ' + req.url); 
  
    res.setHeader('Content-Type', 'text/html'); 
   
    let dir = './public/' 
    switch (req.url) { 
       case '/': 
          dir += 'index.html' 
          res.statusCode = 200; 
          break; 
  
       case '/about': 
          dir += 'about.html' 
          res.statusCode = 200; 
          break; 
  
       case '/contact': 
          dir += 'contact.html' 
          res.statusCode = 200; 
          break; 
  
       // home route redirect 
       case '/home': 
          res.statusCode = 301; 
          res.setHeader('Location', '/'); 
          res.end(); 
          break; 
  
       default: 
          dir += 'error.html' 
          res.statusCode = 404; 
          break; 
    }
   
   fs.readFile(dir, function (err, data) { 
       if (err) { 
          console.log(err); 
          res.end(); 
       } else { 
          res.write(data); 
          res.end(); 
       } 
    }); 
 });
 server.listen(5000, 'localhost', function () { 
    console.log('Connected'); 
 });
