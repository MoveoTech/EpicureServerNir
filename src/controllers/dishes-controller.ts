import {
  addNewDish,
  fetchDishes,
  fetchSpecificDish,
  updateDishById,
  deleteDishById,
  fetchSignatureDishes,
} from "../handlers/dishes.handler";

const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

export const addDish = async (req, res) => {
  addNewDish(req.body)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const dishes = async (req, res) => {
  fetchDishes()
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const getSignatueDishes = async (req, res) => {
  fetchSignatureDishes()
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const getSpecificDish = async (req, res) => {
  fetchSpecificDish(req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const updateDish = async (req, res) => {
  updateDishById(req.body, req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

// export const newSignatureDish = async (req, res) => {
//   updateSignatureDish(req.body, req.params.id)
//     .then((data) => handleResponse(res, data))
//     .catch((err) => handleError(res, err));
// };

export const deleteDish = async (req, res) => {
  deleteDishById(req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};
