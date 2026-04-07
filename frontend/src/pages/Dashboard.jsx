import SearchBar from "../components/SearchBar";
import AISuggestion from "../components/AISuggestion";
import HospitalCard from "../components/HospitalCard";
import homeBg from "../assets/images/HomePageBackground.jpg";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-primary-100/60">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homeBg}
            alt="Homepage background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-600/60 " />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
          

          <div className="mt-20 text-center text-white px-4 sm:px-0">
            <p className="text-sm uppercase tracking-[0.35em] text-teal-200 opacity-90 mb-4">
              Discover hospitals, diagnostics and specialties near you
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Compare top hospitals and healthcare services in one place
            </h1>
          </div>

          <div className="mt-10 flex flex-col items-center gap-6 pb-12">
            <SearchBar />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950" />
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-16 pt-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className=" flex justify-center items-center flex-col w-full pb-12 ">
            <AISuggestion />
            
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <HospitalCard key={i} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
