import { PlayCircle } from "lucide-react";

export function VslPlayer() {
  return (
    <div className="relative aspect-video w-full max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-2xl overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="flex items-center justify-center h-full">
        <PlayCircle className="h-16 w-16 md:h-24 md:w-24 text-white/70 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
      </div>
       <div className="absolute bottom-4 left-4 text-white/80 text-xs font-semibold">
        Clique para assistir
       </div>
    </div>
  );
}
