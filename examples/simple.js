// Load modules

var Hapi = require('hapi');


// Declare internals

var internals = {};


var server = new Hapi.Server(8080);

server.route({
    method: 'GET',
    path: '/',
    handler: function () {

        return this.reply('1');
    }
});


server.pack.allow({ ext: true }).require('../', null, function (err) {

    if (err) {
        console.log(err);
        return;
    }

    server.start(function () {

        console.log('Server started at: ' + server.info.uri);
        console.log('Debug console started at: ' + server.info.uri + server.plugins.tv.endpoint);
    });
});