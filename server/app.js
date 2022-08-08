const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const { Router: TodoRouter } = require('./Todo');
const { handleErrorMiddleware, logMiddleware, idValidation } = require('./middlewares');

// const todoRoutes = require('./routes/todo');

const app = express();

(async () => {
    // connect to db
    await mongoose.connect('mongodb://localhost/todo', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // middlewares
    app.use(bodyParser.json());
    app.use(logMiddleware);
    app.use('/api/todo', TodoRouter);
    //app.use(idValidation);
    app.use(handleErrorMiddleware);

    // starting server
    app.listen(3333, () => console.log('server started listening on port: 3333'));
})();