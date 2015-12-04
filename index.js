'use strict';

Error.stackTraceLimit = 100;

const cluster = require('cluster');
const appConfig = require('./lib/appConfig');

if(cluster.isWorker || appConfig.appMode === 'development'){
    require('./worker');
}else{
    require('./master');
}
