const express = require(`express`);
const bodyParser = require(`body-parser`);

const path = require(`path`);

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

app.set(`views`, path.join(__dirname, `../views`));
app.set(`view engine`, `jade`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressSession({
  secret: `keyboard cat`,
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, `../public`)));

app.use(passport.initialize());
app.use(passport.session());

const mustBeAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect(`/api/user/login`);
  }
};

app.all(`/api/user/profile*`, mustBeAuthenticated);
app.use(`/api/notes`, notesRouter);
app.use(`/api/user`, userRouter);

module.exports = app;
