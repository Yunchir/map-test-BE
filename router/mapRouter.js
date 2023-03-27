import Restaurant from "../model/model.js";
import express from "express";

const restaurantRoute = express.Router();

restaurantRoute.get("/addrestaurant", async (req, res) => {
  const newRest = new Restaurant({
    name: "Yuna restaurant",
    location: {
      coordinates: [106.934593, 47.923756],
    },
  });
  newRest.save();
  res.status(200).send("success");
});

restaurantRoute.post("/nearrestaurant", async function (req, res) {
  console.log("req body", req.body);
  const currentLocation = req.body.location;
  console.log("currentLocation:", currentLocation);

  const nearestRestaurant = await Restaurant.findOne({
    location: {
      $near: {
        $geometry: currentLocation,
        $maxDistance: 1000,
      },
    },
  }).exec();
  res.send(nearestRestaurant);

  // res.status(200).send("hello");
});

export default restaurantRoute;
