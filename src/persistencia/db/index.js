import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb://anyone:${process.env.MONGOPASS}@proyecto-final-shard-00-00.obuuu.mongodb.net:27017,proyecto-final-shard-00-01.obuuu.mongodb.net:27017,proyecto-final-shard-00-02.obuuu.mongodb.net:27017/?ssl=true&replicaSet=atlas-xzhi9f-shard-0&authSource=admin&retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Database ok!");
  } catch (error) {
    console.log("Error en la conexion a la base de datos");
  }
}
