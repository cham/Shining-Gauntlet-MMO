'use strict';

const path = require('path');
const express = require('express');
const routemaster = require('routemaster');
const cluster = require('cluster');
const appConfig = require('./lib/appConfig');
const app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'template');
app.engine('template', require('hogan-express'));

app.use(routemaster({
    directory: './routing/routes',
    Router: express.Router
}));

app.listen(appConfig.appPort, () => {
    if(cluster.isMaster){
        console.warn(`Listening on port ${appConfig.appPort} in development mode.`);
    }else{
        console.info(`Worker ${cluster.worker.id} listening on port ${appConfig.appPort}.`);
    }
});
