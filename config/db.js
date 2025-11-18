import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // MongoDB URI .env fayldan olinadi
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); // Serverni to‘xtatish
  }
};

export default connectDB;
