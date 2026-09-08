import { useNavigate } from "react-router-dom";
import { Clapperboard, ArrowLeft } from "lucide-react";
import BlurCircle from "./BlurCircle";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      <BlurCircle top="-100px" left="-100px" />
      <BlurCircle bottom="-100px" right="-100px" />

      <Clapperboard className="w-14 h-14 text-primary mb-6" strokeWidth={1.5} />

      <h1 className="text-[7rem] md:text-[9rem] leading-none font-semibold text-white">
        404
      </h1>

      <p className="text-2xl md:text-3xl font-medium mt-2 text-white">
        This scene doesn't exist
      </p>

      <p className="text-gray-400 mt-4 max-w-md text-sm md:text-base leading-relaxed">
        The page you're looking for was cut from the final edit. It may have
        been moved, renamed, or never made it to the screen.
      </p>

      <div className="flex items-center flex-wrap justify-center gap-4 mt-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <button
          onClick={() => navigate("/movies")}
          className="px-10 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95"
        >
          Browse Movies
        </button>
      </div>
    </div>
  );
}

export default NotFound;