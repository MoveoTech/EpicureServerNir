import { Chef } from "../models/chefs-collection";
import {
  addNewChef,
  deleteChefById,
  fetchChefOfTheWeek,
  fetchChefs,
  fetchSpecificChef,
  updateChefById,
  updateChefOfTheWeek,
} from "../handlers/chefs.handler";

const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

export const addChef = async (req, res) => {
  addNewChef(req.body)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const chefs = async (req, res) => {
  fetchChefs()
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const getChefOfTheWeek = async (req, res) => {
  fetchChefOfTheWeek()
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const newChefOfTheWeek = async (req, res) => {
  updateChefOfTheWeek(req.params.id, req.body)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const getSpecificChef = async (req, res) => {
  fetchSpecificChef(req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const updateChef = async (req, res) => {
  updateChefById(req.body, req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};

export const deleteChef = async (req, res) => {
  deleteChefById(req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
};
