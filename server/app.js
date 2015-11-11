import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import appRootPath from 'app-root-path';
import stylus from 'stylus';
import nib from 'nib';

import indexRoute from './routes';
import tokenRoute from './routes/token';

const app = express();
const { path: rootPath } = appRootPath;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(path.join(rootPath, 'public', 'favicon.ico')));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(stylus.middleware({
  debug: true,
  src: path.join(rootPath, 'public'),
  compile(str, pathName) {
    return stylus(str).set('filename', pathName)
      .set('compress', true)
      .use(nib())
      .import('nib');
  }
}));
app.use(express.static(path.join(rootPath, 'public')));

app.use('/', indexRoute);
app.use('/token', tokenRoute);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((error, req, res) => {
    res.status(error.status || 500);
    res.render('error', {
      message: error.message,
      error
    });
  });
}

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.render('error', {
    message: error.message,
    error: {}
  });
});

export default app;
