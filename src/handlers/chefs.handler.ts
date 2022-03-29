import { ChefOfTheWeek } from "../models/chef-of-the-week.collection";
import { Chef } from "../models/chefs-collection";
import { Restaurant } from "../models/restaurants-collection";

export const addNewChef = async (chefObj) => {
  try {
    const newChef = new Chef({ ...chefObj });
    await newChef.save();
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchChefs = async () => {
  try {
    const chefs = await Chef.find({}).exec();
    return chefs;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchChefOfTheWeek = async () => {
  try {
    const chefOfTheWeek = await ChefOfTheWeek.find({})
      .populate("chefOfTheWeek")
      .exec();
    return chefOfTheWeek;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const updateChefOfTheWeek = async (chefOfTheWeekId, ChefId) => {
  console.log(chefOfTheWeekId);
  console.log(ChefId);
  try {
    const chefOfTheWeek = await ChefOfTheWeek.findOneAndUpdate(
      { _id: chefOfTheWeekId },
      ChefId
    )
      .populate("chefOfTheWeek")
      .exec();
    return chefOfTheWeek;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchSpecificChef = async (id) => {
  try {
    const chef = await Chef.findById(id).exec();
    return chef;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const updateChefById = async (chefObj, chefId) => {
  console.log(chefId);
  try {
    await Chef.findOneAndUpdate({ _id: chefId }, chefObj).exec();
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const deleteChefById = async (id) => {
  try {
    await Chef.findByIdAndDelete(id);
    await Restaurant.deleteMany({ chef: id });
    return "Chef deleted";
  } catch (e) {
    console.log(e);
    return e;
  }
};
