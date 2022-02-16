const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const sequelize = require('./db')
const PORT = process.env.PORT || 8000;
const models = require('./models/models')
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlerMiddleware');
const path = require('path');


app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

//error handler middleware
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`PERN ecommerce is running on port ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
}

start();

