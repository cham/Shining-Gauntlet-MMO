'use strict';

var konfiga = require('konfiga');
var os = require('os');

module.exports = konfiga({
    processes: {
        defaultValue: os.cpus().length,
        envVariableName: 'NUM_WORKERS',
        cmdLineArgName: 'num-workers',
        type: Number
    },
    appPort: {
        defaultValue: 3000,
        envVariableName: 'APP_PORT',
        cmdLineArgName: 'app-port',
        type: Number
    }
});
