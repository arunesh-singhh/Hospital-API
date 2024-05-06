import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const baseUrl = process.env.MONGODB_URL;

mongoose.connect(`${baseUrl}/Hospital-API`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', () => {
    console.log("Successfully connected to the Database");
});

export default db;