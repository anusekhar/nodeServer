var express    =    require('express');
var app        =    express();
var mysql      = require('mysql');
var client = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'gmail'
});
client.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");
} else {
    console.log("Error connecting database ... \n\n");
}
});


require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server     =    app.listen(3000,function(){
console.log("Express is running on port 3000");

});


app.get('/process_get', function (req, res) {
// Prepare output in JSON format
response = {
   user_name:req.query.username,
   password:req.query.password
 };
 console.log(response);
 client.query('SELECT * from details where name="'+response.user_name+'" and password="'+response.password+'" ', function(err, rows, fields) {
 //client.end();
   if (rows.length!=0)
   {
     console.log('loged in: ', rows);
     res.render('home.html',{title: response.user_name });
   }
  else
     {
       console.log('Error while performing Query.');
       res.render('index.html');
     }

   });

});


app.get('/process_post', function (req, res) {

  client.query('INSERT INTO details ( name,password ) VALUES( "'+req.query.username+'", "'+req.query.password+'")',  function(err, rows, fields) {
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
