const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the partners to you');
    })
    .post((req, res) => {
        res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /partners');
    })
    .delete((req, res) => {
        res.end('Deleting all partners');
    });

partnerRouter.route('/:partnerId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
    })
    .post((req, res) => {
        ////////// FIX 1: You forgot to overwrite the default 200 status code you set on line 26.
        res.statusCode = 403;
        ////////// END FIX 1
        res.end(`POST operation not supported on /partners/${req.params.partnerId}`);
    })
    .put((req, res) => {
        res.write(`Updating the partner: ${req.params.partnerId}\n`);
        ////////// NOTE: This part of the message should reflect both the partner's name and description.
        // OLD CODE:    res.end(`Will update the partner: ${req.params.partnerId} with description: ${req.body.description}`);
        res.end(`Will update the partner: ${req.body.name} with description: ${req.body.description}`);
        ////////// END NOTE
    })
    .delete((req, res) => {
        res.end(`Deleting partner: ${req.params.partnerId}`);
    });
module.exports = partnerRouter;
