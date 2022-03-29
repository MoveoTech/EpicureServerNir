import { Dish } from "../models/dishes-collection";
import { SignatureDish } from "../models/signature-dishes.collection";

export const addNewDish = async (dishObj) => {
  try {
    const newDish = new Dish({
      ...dishObj,
    });
    await newDish.save();
    return newDish;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchDishes = async () => {
  try {
    const dishes = await Dish.find({}).populate("restaurant").exec();
    return dishes;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchSignatureDishes = async () => {
  try {
    const signatureDishes = await SignatureDish.find({}).exec();
    return signatureDishes;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchSpecificDish = async (id) => {
  try {
    const dish = await Dish.findById(id).exec();
    return dish;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const updateDishById = async (dishObj, id) => {
  console.log(id);
  console.log(dishObj);
  try {
    await Dish.findOneAndUpdate({ _id: id }, dishObj)
      .populate("restaurant")
      .exec();
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const updateSignatureDish = async (signatureDishId, dishId) => {
  try {
    const chefOfTheWeek = await SignatureDish.findOneAndUpdate(
      { _id: signatureDishId },
      dishId
    )
      .populate("chefOfTheWeek")
      .exec();
    return chefOfTheWeek;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const deleteDishById = async (id) => {
  try {
    await Dish.findByIdAndDelete(id);
    return "Dish deleted";
  } catch (e) {
    console.log(e);
    return e;
  }
};
