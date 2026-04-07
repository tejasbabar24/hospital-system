import brainLogo from "../assets/images/brainLogo.png";

const AISuggestion = () => {
  return (
    <div className="mt-10 flex justify-center w-full">
      
      {/* Glow Wrapper */}
      <div className="relative rounded-xl">
        
        {/* Glow Layer */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2DD4BF] to-[#CCFBF1] blur-xl opacity-70"></div>

        {/* Actual Gradient Border */}
        <div className="relative bg-gradient-to-r from-[#2DD4BF] to-[#CCFBF1] rounded-xl backdrop-blur-lg">

          {/* Inner Card */}
          <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-primary-600 to-primary-400 text-white px-6 py-4 rounded-xl shadow-2xl">

            <div className="flex items-center gap-4">
              <div className="bg-accent-50 p-3 rounded-2xl text-xl">
                <img src={brainLogo} alt="AI Brain" className="w-8 h-8" />
              </div>

              <p className="font-medium text-sm sm:text-base">
                <span className="font-semibold">AI Suggestion:</span> Best MRI
                under ₹3000 near you
              </p>
            </div>

            <button className="bg-primary-600 hover:bg-primary-700 px-5 py-3 rounded-2xl text-sm font-medium transition">
              View Details
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AISuggestion;
