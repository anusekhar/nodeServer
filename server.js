var express    =    require('express');
var app        =    express();
var mysql      =    require('mysql');
app.use(express.static('public'));

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
