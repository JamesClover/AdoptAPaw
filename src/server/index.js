require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('./database');
const controller = require('./controllers');


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));


app.use(express.static(path.join(__dirname, '../../dist')));

const PORT = process.env.PORT || 3000;

app.get('/apiv1/cats', controller.getAllCats);
app.get('/apiv1/cats/:id', controller.getOneCat);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});