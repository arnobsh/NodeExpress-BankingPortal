const express = require('express');

//declare the router module as variable by express
const router = express.Router();

const { accounts } = require('../data');

router.get('/savings', (req,res) => res.render('account', { account: accounts.saving }));
router.get('/checking', (req,res) => res.render('account', { account: accounts.checking }));
router.get('/credit', (req,res) => res.render('account', { account: accounts.credit }));

//exporting the module
module.exports = router;
