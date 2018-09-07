import createError from "http-errors"
import express from "express"

import fileRouter from "./routes/files"
import indexRouter from "./routes/index"
import usersRouter from "./routes/users"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/files', fileRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log("err = ", err)
  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
