import {
  addNewRestaurant,
  deleteRestaurantById,
  fetchPopRestaurants,
  fetchRestaurants,
  fetchSpecificChefRestaurants,
  fetchSpecificRestaurant,
  updateRestaurantById,
} from "../handlers/restaurants.handler";

const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

export const addRestaurants = async (req, res) => {
  addNewRestaurant(req.body)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const restaurants = async (req, res) => {
  fetchRestaurants()
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const PopRestaurants = async (req, res) => {
  fetchPopRestaurants()
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const getSpecificRestaurant = async (req, res) => {
  fetchSpecificRestaurant(req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const getSpecificChefRestaurants = async (req, res) => {
  fetchSpecificChefRestaurants(req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const updateRestaurant = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  updateRestaurantById(req.body, req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const deleteRestaurant = async (req, res) => {
  deleteRestaurantById(req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};
