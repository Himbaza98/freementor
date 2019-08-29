const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./server/routes/userRoute')

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('api/v1/auth', userRoute);

app.listen(PORT, console.log("you are listening on port 4000"))