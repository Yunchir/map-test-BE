import express from "express";
import cors from "cors";
import restaurantRoute from "./router/mapRouter.js";
import mongoose from "./config/mongoose.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(restaurantRoute);

app.listen(port, () => {
  console.log("localhost running: ", port);
});
