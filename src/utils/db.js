import mongoose from "mongoose";

let isConnected = false;

async function connectToDatabase() {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }
  console.log(process.env.MONGODB_URL);
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

export { connectToDatabase };
