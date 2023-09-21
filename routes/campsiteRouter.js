const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the campsites to you');
    })
    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /campsites');
    })
    .delete((req, res) => {
        res.end('Deleting all campsites');
    });

campsiteRouter.route('/:campsiteId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
    })
    .post((req, res) => {
        ////////// FIX 1: You need to overwrite the status code. The default you set up on line 26 above is 200. We need a 403 here (forbidden).
        res.statusCode = 403;
        ////////// END FIX 1
        res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
    })
    .put((req, res) => {
        res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
        ////////// NOTE: Looks like you got mixed up. This second part of the message is supposed to have the name and description fields.
        // OLD CODE:    res.end(`Will update the campsite: ${req.params.campsiteId} with description: ${req.body.description}`);
        res.end(`Will update the campsite: ${req.body.name} with description: ${req.body.description}`);
        ////////// END NOTE
    })
    .delete((req, res) => {
        res.end(`Deleting campsite: ${req.params.campsiteId}`);
    });

module.exports = campsiteRouter;
