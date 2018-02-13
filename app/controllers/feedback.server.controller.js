exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;
    if(session.username) {
        res.render('feedback', {
            title: 'Feedback',
            email: session.username
        });
    }else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href=' + '/' + '>Login</a>');
    }
}