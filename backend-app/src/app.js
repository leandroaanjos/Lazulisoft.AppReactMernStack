var createError = require('http-errors');
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const appConstants = require('./appConstants');

// Routes
const studentRoute = require('./routes/studentRoute');

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(appConstants.DbConnString, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database successfully connected!')
},
    error => {
        console.log('Could not connect to database : ' + error)
    }
)

// Server configs
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/api/v1', studentRoute)

// Server port
const port = process.env.PORT || appConstants.Port;

// Execute the server
app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Error configs
// 404 Error
app.use((req, res, next) => {
    next(createError(404));
});

// 500 Error
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    res.status(err.statusCode).send(err.message);
});
