const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const PORT = config.get('port' || 4000);

app.use(express.json({extended:true}));
app.use(methodOverride('_method'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/item', require('./routes/recipe.routes'));
app.use('/api/unit', require('./routes/units.routes'));
app.use('/api/files', require('./routes/uploads.routes'));
app.use('/', require('./routes/single-recipe.routes'));

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname,'client','build')));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const start = async () => {
    try {
        await mongoose.connect(config.get("mongoURI"), {
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