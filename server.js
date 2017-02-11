(function () {
    'use strict';
    var express = require('express')
        , app = express()
        , port = 5000;
    
    app.use(express.static('public/lib'));
    app.use(express.static('src/app'));
    
    app.listen(port, function () {
        console.log('Running with port' + port);
    });
    
}());