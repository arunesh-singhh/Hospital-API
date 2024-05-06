import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import db from './config/mongoose.js'; // This file sets up the database connection
import passportJWT from './config/passport-jwt-strategy.js'; // This file configures the Passport JWT strategy

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

// Use express router
import routes from './routes/index.js';
app.use('/', routes);

const PORT = process.env.PORT || 3000; // Default to port 3000 if process.env.PORT is not set

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error in running the Server. Error is: ${error}`);
        return;
    }
    console.log(`Server is up and running on the port: ${PORT}`);
});