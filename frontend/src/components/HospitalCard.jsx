import { MapPin, Star } from "lucide-react";
import image from "../assets/images/HomePageBackground.jpg"
const HospitalCard = () => {
  return (
    <div className="w-[220px] border-primary-700 rounded-xl shadow-lg p-3">
      
      <img
        src={image}
        alt="hospital"
        className="rounded-lg"
      />

      <h3 className="mt-2 font-semibold">
        Hospital Name
      </h3>

      <div className="flex items-center justify-between text-sm mt-1">
        <span className="flex items-center gap-1">
          <Star size={14} /> 4.0
        </span>

        <span className="flex items-center gap-1">
          <MapPin size={14} /> 2.5 km
        </span>
      </div>

      <p className="text-green-600 font-semibold mt-2">
        ₹3000
      </p>

      <button className="w-full mt-3 bg-teal-500 text-white py-2 rounded-lg">
        Compare
      </button>
    </div>
  );
};

export default HospitalCard;