const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

// template file location
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

// get the account and user data
const accountData = fs.readFileSync(
  path.join(__dirname,'json','accounts.json'),'UTF8');
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(
  path.join(__dirname,'json','users.json'),'UTF8');
const users = JSON.parse(userData);

// this is defined all te routes
app.get('/', (req,res) => res.render('index',{ title: 'Account Summary', accounts }));
app.get('/savings', (req,res) => res.render('account', { account: accounts.saving }));
app.get('/checking', (req,res) => res.render('account', { account: accounts.checking }));
app.get('/credit', (req,res) => res.render('account', { account: accounts.credit }));
app.get('/profile', (req,res) => res.render('profile', { user: users[0] }));


app.listen(3000, () => console.log('PS project running on port 3000!'));
