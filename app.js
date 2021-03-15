const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();
const PORT = config.get('port' || 4000);

app.use('/api/auth', require('./routes/auth.routes'));

const start = async () => {
    try {
        await mongoose.connect(config.get("mongoURL"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => {console.log(`App has been started on port: ${PORT}`);})
    } catch (error) {
        console.log("Server error", error.message);
        process.exit(1);
    }
}

start();