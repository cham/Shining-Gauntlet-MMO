'use strict';

const sinon = require('sinon');
const express = require('express');
const index = require('../../../routing/routes/index');
const sandbox = sinon.sandbox.create();

describe('index routes', () => {
    let router;

    beforeEach(() => {
        router = new express.Router();
        index(router);
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('get', () => {
        describe('/', () => {
            let req;
            let res;

            beforeEach(() => {
                req = {
                    method: 'get',
                    url: '/'
                };

                res = {
                    render: sandbox.stub()
                };

                router(req, res);
            });

            it('renders the index template', () => {
                expect(res.render.calledOnce).toEqual(true);
                expect(res.render.calledWith('index')).toEqual(true);
            });
        });
    });
});
