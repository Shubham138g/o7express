import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const Connection = async () => {
    const URL = process.env.URL;
    try {
        await mongoose.connect(URL)
        console.log("database connected successfully");
    } catch (error) {
        console.log("Error in database connection");
    }

}

export default Connection;