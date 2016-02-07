var express = require('express')
var app = express()

app.get('/', function(req, res) {
    var result = {
        'ip-address': req.ip,
        'language': req.headers["accept-language"].split(',')[0],
        'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
    };
    res.send(result);
});

app.listen(3000)
