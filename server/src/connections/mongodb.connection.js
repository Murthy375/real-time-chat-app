import mongoose from "mongoose";

export const connectToMongoDB = async (connectionURL) => {
  try {
    const connection = await mongoose.connect(connectionURL);
    console.log("connected to MongoDB🌿\n");
    return connection;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // exit the process or crash the server
  }
};
