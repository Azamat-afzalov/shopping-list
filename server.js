const express = require('express');
const mongoose = require('mongoose');

const app = express();
const itemsRoutes = require('./routes/api/items');
const path = require('path');

app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo db connected'))
    .catch((err) => console.log(err));

app.use('/api/items', itemsRoutes);

// Serve static assets if in production

if (process.env.NODE_ENV = 'production') {
    //Set Static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))