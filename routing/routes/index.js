'use strict';

function index(req, res){
    res.send('hello');
}

module.exports = function(router){
    router.get('/', index);
};
