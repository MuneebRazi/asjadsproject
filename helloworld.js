var mysql = require('mysql');
var express = require('express');
var app = express();
var http = require('http');
var con = mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "",
  database: "forms",
  port: 3306
 });
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});

con.connect(function(err) {
 if (!!err) 
 	 {
 	 	console.log("error");
 	 }
 	else
 	{
 		console.log("Connected!");
 		var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
switch(path) {
//*************************************admin login
//some data will come form the website

case '/adminlogin':
res.writeHead(200, { 'Content-Type': 'text/plain' });
con.query("SELECT * FROM admin where email = 'muneeb' & password ='pass'" , function (err, result) {
	   if (err) 
	   	throw err;

    res.end('login complete');
    //then send data of admin and open page
    //only the html & css files

  });
break;

default:
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('Not Found');
break;
}

}
  
});

app.listen(1337);
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');