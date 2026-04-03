import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Hospital } from "../schema/hospitalSchema.js";

export const addHospital = asyncHandler(async (req, res) => {
  const { name, address, location, specialties } = req.body;

  if (!name || !location.coordinates) {
    throw new ApiError(400, "Name and location are required");
  }

  const hospital = new Hospital({
    name,
    address,
    location,
    specialties,
  });

  await hospital.save();

   return res
    .status(201)
    .json(new ApiResponse(201, hospital, "Hospital added successfully"));

});

export const getHospitals = asyncHandler(async (req, res) => {
  const hospitals = await Hospital.find();
  return res
    .status(200)
    .json(new ApiResponse(200, hospitals, "Hospitals retrieved successfully"));
});

export const getHospitalById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const hospital = await Hospital.findById(id);

  if (!hospital) {
    throw new ApiError(404, "Hospital not found");
  } 
    return res
    .status(200)
    .json(new ApiResponse(200, hospital, "Hospital retrieved successfully"));       
});
