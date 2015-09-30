var mysql      =    require('mysql');
var client = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'gmail'
});

var path = require('path'),
   express = require('express');
   bodyParser = require('body-parser');

var session = require('express-session');
var cookieParser = require('cookie-parser');

module.exports = function(app, passport) {

   //Initializing session
   app.use(bodyParser());
   app.use(cookieParser());
   app.use(session({secret:'somesecrettokenhere'}));

   app.get('/', function(req, res){
      console.log(req.session);
       req.session.destroy();
       res.render('index.html');
   });
   app.get('/logout', function(req, res){

     res.render('index.html');
     req.session.destroy();
 });

    app.get('/home',function(req,res){
      req.session.destroy();
      res.redirect("/");
       res.render('index.html');

    });

   app.get('/signup',function(req,res){

      res.render('signup.html');
  });

  app.post('/', function (req, res) {
  // Prepare output in JSON format

    response = {
      user_name:req.body.username,
      password:req.body.password
    };


    console.log(response);
    client.query('SELECT * from details where name="'+response.user_name+'" and password="'+response.password+'" ', function(err, rows, fields) {
      //client.end();
      if (rows.length!=0)
      {
        console.log('loged in: ', rows);
        req.session.username = response.user_name
        res.render("gmail.html");
      }
      else
        {
          console.log('Error while performing Query.');
          res.render('index.html');
        }

      });

     });

  app.get('/process_post', function (req, res) {

    server.client.query('INSERT INTO details ( name,password ) VALUES( "'+req.query.username+'", "'+req.query.password+'")',  function(err, rows, fields) {
      if(err){
        console.log('Error');
      }
      else {
        console.log(req.query.username);
        console.log('signup');
      }

      res.render('index.html');
  });
  });
}
