'use strict';

const cluster = require('cluster');
const config = require('./lib/appConfig');

function startInitial() {
    const numToBoot = config.processes;

    let numBooted = 0;

    function increment(){
        numBooted += 1;

        if(numBooted === numToBoot){
            console.info(`${numToBoot} workers listening on port ${config.appPort}.`);
        }
    }

    for(let i = 0; i < numToBoot; i += 1){
        cluster.fork().once('listening', increment);
    }
}

startInitial();

function handleExit(worker) {
    console.error(`Worker died. PID: ${worker.process.pid}`);

    const newWorker = cluster.fork().once('listening', () => console.info(`Replacement worker spawned. PID: ${newWorker.process.pid}`));
}

// Restart dead workers
cluster.on('exit', handleExit);
