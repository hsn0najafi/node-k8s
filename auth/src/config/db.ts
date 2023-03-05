import mongoose from "mongoose";

export const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI || "mongodb://localhost:27017/auth");
        console.log("MongoDB connected.");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

