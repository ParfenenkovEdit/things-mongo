require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const api = require('./routes/api');
const app = express();
const PORT = process.env.PORT || 3000;
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'));

app.use(cors());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(bodyParser.json());
app.use('/api', api);

app.all('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`app started on ${PORT} port`)
});

mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
