import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://yunchir:89545650@cluster0.gqhbgdd.mongodb.net/test")
  .then(() => console.log("connect"));

export default mongoose.connection;
