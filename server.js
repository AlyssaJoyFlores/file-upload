require('dotenv').config();
require('express-async-errors')

const express = require('express');
const server = express();
const cors = require('cors');

const fileUpload = require('express-fileupload')

// use v2
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET
})


// database
const connectDB = require('./db/connect')

// import route
const productRouter = require('./routes/productRoutes')


// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
server.use(cors())
server.use(express.static('./uploads'))
server.use(express.json());
server.use(express.urlencoded({ extended: true}))
server.use(fileUpload({useTempFiles:true}));

// router
server.use('/api/v1/products', productRouter);


const port = process.env.PORT || 3000;

const start = async() => {
    try {
        await connectDB();

        server.listen(port, ()=> {
            console.log(`Server listening on port ${port}`);
        })
    } catch (error) {
        console.log(error)
    }
};

start();