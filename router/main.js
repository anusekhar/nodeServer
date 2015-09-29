module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html');

     });
     app.post('/', function (req, res) {
       res.render('home.html');

     });
     app.get('/home',function(req,res){
        res.render('home.html');

     });
     app.get('/signup',function(req,res){
        res.render('signup.html');
    });
    
}
