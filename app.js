import 'babel/polyfill';

import express, { static } from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
imoprt stylus from 'stylus';

import routes from './routes/index';
import token from './routes/token';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/token', token);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
      message: error.message,
      error
    });
  });
}

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.render('error', {
    message: error.message,
    error: {}
  });
});


export default app
