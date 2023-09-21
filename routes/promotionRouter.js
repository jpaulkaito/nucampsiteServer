const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the promotions to you');
    })
    .post((req, res) => {
        res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res) => {
        res.end('Deleting all promotions');
    });

promotionRouter.route('/:promotionId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
    })
    .post((req, res) => {
        ////////// FIX 1: You forgot to overwrite the default 200 status code you set on line 26.
        res.statusCode = 403;
        ////////// END FIX 1
        res.end(`POST operation not supported on /promotions/${req.params.promotionId}`);
    })
    .put((req, res) => {
        res.write(`Updating the promotion: ${req.params.promotionId}\n`);
        ////////// NOTE: This part of the message is supposed to reflect both the promotion's name and description.
        // OLD CODE:    res.end(`Will update the promotion: ${req.params.promotionId} with description: ${req.body.description}`);
        res.end(`Will update the promotion: ${req.body.name} with description: ${req.body.description}`);
        ////////// END NOTE
    })
    .delete((req, res) => {
        res.end(`Deleting promotion: ${req.params.promotionId}`);
    });
module.exports = promotionRouter;
