import { Film, Play } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
      <div className="relative">
        <Film className="w-8 h-8" />
        <Play className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white fill-current" />
      </div>
    </div>
  );
};

export default Logo;
