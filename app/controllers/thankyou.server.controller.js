exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;
    //check if username is stored in session object
    if (session.username) {
        res.render('thankyou');
    }
    else { 
        res.write('<h1>Please login first.</h1>');
        res.end('<a href=' + '/' + '>Login</a>');
    }
    
};