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

	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
switch(path) {
con.connect(function(err) {
 if (!!err) 
 	 {
 	 	console.log("error");
 	 }
 	else
 	{
 		console.log("Connected!");
//*************************************admin login
//some data will come form the website

con.query("SELECT * FROM admin where email ="+email+"& password ="+password , function (err, result) {
	   if (err) 
    	throw err;
    //then send data of admin and open page
    //only the html & css files

  });

//************************************to register salesman
//salesman will enter a email address to get registed
//system will check if the email is already used
con.query("SELECT * FROM salesman where email ="+email , function (err, rows) {

if (err) 
    	throw err;
    //else if not in use then
if(rows.email != email)
{
con.query("INSERT INTO salesman (salesmanname,email,password) VALUES ("+name+","+email+","+password+")",function(err,result){
	   if (err) 
    	throw err;
    //massage 'registration complete'
    });
}
else
{
	//massage already in use
	console.log("already exist");
}


});
//*************************************salesman login

con.query("SELECT * FROM salesman where email ="+email+"& password ="+password , function (err, result) {
	   if (err) 
    	throw err;
    //then send data of admin and open page
else
{
	//massage 'invalid email or password'
}
  });

//**********************************register customer
//salesman will enter a company name to get register customer
//system will check if the email is already used
con.query("SELECT * FROM customer where company ="+company , function (err, rows) {

if (err) 
    	throw err;
    //then send data of admin and open page
if(rows.company != company)
{
con.query("INSERT INTO customer (company,address,contact,fax,postal_code,salesmanid,wedsite,email_1,contactname) VALUES ("+name+","+address+","+contact+","+fax+","+postalcode+","+salesmanid+","+wedsite+","+email_1+","+contactname+")",function(err,result){
	   if (err) 
    	throw err;
    //massage 'registration complete'
    });
}
else
{
	console.log("already exist");
}


});
//**********************************fleged customer
con.query("SELECT * FROM customer where fleg = false" , function (err, rows) {

if (err) 
    	throw err;
    //complete form to website
});
if(company == allow )
{
con.query("UPDATE customer SET fleg = 'true' where company = company " ,function(err,result){
	   if (err) 
    	throw err;
    //massage 'customer registered'
    });
}
else
{
	con.query("DELETE FROM customer where company = company" ,function(err,result){
	   if (err) 
    	throw err;
    //massage 'customer deleted'
    });
}
//**********************************register order
//order information form website
con.query("INSERT INTO order (ordername,ordertype,placement,size,comment,customerid,designerid,status,amount) VALUES ("+name+","+type+","+placement+","+size+","+comment+","+customerid+","+designerid+","+status+","+amount+")",function(err,result){
	   if (err) 
    	throw err;
    //massage 'order completed'
    });
//**********************************check order
con.query("SELECT * FROM order where orderid ="+orderid ,function(err,result){
	   if (err) 
    	throw err;
    console.log(rows.status);
    });
//**********************************update order
//
con.query("update order where orderid="+orderid,function(err,result){
	   if (err) 
    	throw err;
    //then send data of admin and open page
    });

//**********************************assign designer
con.query("update order where orderid="+orderid,function(err,result){
	   if (err) 
    	throw err;
    //then send data of admin and open page
    });

//**********************************create invoice
con.query("update order where orderid="+orderid,function(err,result){
	   if (err) 
    	throw err;
    //then send data of admin and open page
    });

}
  
});

app.listen(1337);























//app.get('/',function(req,resp){
//	con.query("SELECT * FROM designer", function(error,rows,fields){
//		resp.send(rows);
//	});
//})


//var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  //con.query(sql, function (err, result) {
    //if (err) 
    //	throw err;
    //console.log("Table created");
  //});
 //con.query("CREATE DATABASE mydb", function (err, result) {
//if (err) 
//	throw err;
  //  console.log("Database created");
  //});
 		//con.query("SELECT * FROM designer", function (err, result) {
    //if (err) 
    	//throw err;
    //console.log("Result: " + result);
 // });

//var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  //con.query(sql, function (err, result) {
    //if (err) 
    //	throw err;
    //console.log("1 record inserted");
  //});

//var sql = "INSERT INTO customers (name, address) VALUES ?";
  //var values = [
    //['Chuck', 'Main Road 989'],
   // ['Viola', 'Sideway 1633']
//];
  //con.query(sql, [values], function (err, result)  {
    //if (err) 
    //	throw err;
   // console.log("Number of records inserted: " + result.affectedRows);
  //});
//var sql = "INSERT INTO customers (name, address) VALUES ('Mick', 'red Village 121')";
  //con.query(sql,function (err, result) {
    //if (err) 
    	//throw err;

    //con.query("SELECT name FROM customers", function (err, result, fields) {
 
  //  console.log("1 record inserted, ID: " + result.insertId);
 //});