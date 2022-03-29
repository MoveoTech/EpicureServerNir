import { Dish } from "../models/dishes-collection";
import { Restaurant } from "../models/restaurants-collection";

export const addNewRestaurant = async (restaurantObj) => {
  try {
    const newRestaurant = new Restaurant({
      ...restaurantObj,
    });
    await newRestaurant.save();
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchRestaurants = async () => {
  try {
    const restaurants = await Restaurant.find({})
      .populate("chef")
      .populate("signatureDish")
      .exec();
    return restaurants;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchPopRestaurants = async () => {
  try {
    const popRestaurants = await Restaurant.find({ isPop: true })
      .populate("chef")
      .populate("signatureDish")
      .exec();
    return popRestaurants;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchSpecificRestaurant = async (id) => {
  try {
    const restaurant = await Restaurant.findById(id)
      .populate("chef")
      .populate("signatureDish")
      .exec();
    return restaurant;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchSpecificChefRestaurants = async (id) => {
  try {
    const chef = await Restaurant.find({ chef: id }).exec();
    return chef;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const updateRestaurantById = async (restaurantObj, restaurantId) => {
  try {
    await Restaurant.findOneAndUpdate({ _id: restaurantId }, restaurantObj)
      .populate("chef")
      .populate("signatureDish")
      .exec();
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const deleteRestaurantById = async (id) => {
  try {
    await Restaurant.findByIdAndDelete(id);
    await Dish.deleteMany({ restaurant: id });
    return "Restaurant deleted";
  } catch (e) {
    console.log(e);
    return e;
  }
};
