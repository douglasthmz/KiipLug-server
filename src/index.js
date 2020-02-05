const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://packmanager:packmanager@cluster0-e0g7f.mongodb.net/packs?retryWrites=true&w=majority', {useNewUrlParser: true,  useUnifiedTopology: true })

require('./models/Pack');

app.use(require('./routes'));

app.listen(3001); 