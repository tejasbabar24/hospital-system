import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex justify-center w-full max-w-lg">
      <div className="w-full max-w-3xl bg-white/15 backdrop-blur-xl rounded-2xl px-6 py-3 flex items-center shadow-2xl border border-white">
        <input
          type="text"
          placeholder="Search MRI, X-ray, surgery..."
          className="flex-1 bg-transparent outline-none text-white placeholder-white text-sm sm:text-base"
        />
        <Search className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;