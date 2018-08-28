const express = require(`express`);
const bodyParser = require(`body-parser`);

const passport = require(`./../config/passport`);
const expressSession = require(`express-session`);

const notesRouter = require(`./routes/note_routes`);
const userRouter = require(`./routes/user_routes`);
const app = express();

const mongoose = require(`mongoose`);
mongoose.Promise = Promise;
mongoose.connect(`mongodb://localhost/node-auth`)
  .then(() => console.log(`connection succesful`))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressSession({
  secret: `keyboard cat`,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(`/api/notes`, notesRouter);
app.use(`/api/user`, userRouter);

// app.use(function (req, res, next) {
//   const err = new Error(`Not Found`);
//   err.status = 404;
//   next(err);
// });

module.exports = app;
