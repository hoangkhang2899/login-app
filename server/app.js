require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');
var corsOptions = {
    origin: process.env.CORS_URL,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var sessionRouter = require('./routes/loginSession');
var registerRouter = require('./routes/register');
var customerRouter = require('./routes/customer');
var addCustomerRouter = require('./routes/addCustomer');
var deleteCustomerRouter = require('./routes/deleteCustomer');

var app = express();

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/loginSession', sessionRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/customer', customerRouter);
app.use('/addcustomer', addCustomerRouter);
app.use('/deletecustomer', deleteCustomerRouter);

module.exports = app;
