import Resource from "../models/resource.model.js";

// GET /api/resources
export const getResources = async (req, res) => {
res.json({ message: "Hello World from get" });
};

// POST /api/resources
export const createResource = async (req, res) => {
  res.json({ message: "Hello World from post" });
};
