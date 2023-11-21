import expressAsyncHandler from "express-async-handler"
import mongoose from "mongoose"

export const connectDB = async () => {
  if (process.env.MONGO_URI) {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DATABASE CONNECTED")
  } else throw new Error("MONGO_URI undefined")
}
