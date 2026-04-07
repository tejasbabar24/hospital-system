import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="backdrop-blur-md bg-white/70 border-b border-teal-200/40 fixed top-0 w-full flex items-center justify-between px-8 py-4 shadow-sm z-50">
      
  {/* Logo */}
  <h1 className="text-xl font-semibold text-teal-700">
    MediCompare
  </h1>

  {/* Right Section */}
  <div className="flex items-center gap-6">
    <Search className="cursor-pointer text-teal-700" />
    <Bell className="cursor-pointer text-teal-700" />

    <div className="flex items-center gap-2">
      <img
        src="https://i.pravatar.cc/40"
        alt="user"
        className="w-10 h-10 rounded-full"
      />
    </div>
  </div>
</header>

  );
};

export default Header;