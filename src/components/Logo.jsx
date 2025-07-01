export default function Logo() {
  return (
    <div className="relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-transparent to-purple-500/20 animate-pulse"></div>

      {/* Floating elements */}
      <div className="absolute top-2 left-10 w-8 h-8 bg-white/20 rounded-full blur-sm animate-bounce"></div>
      <div className="absolute bottom-3 right-12 w-6 h-6 bg-yellow-300/30 rounded-full blur-sm animate-pulse"></div>
      <div
        className="absolute top-4 right-20 w-4 h-4 bg-pink-300/40 rounded-full blur-sm animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-2 left-16 w-5 h-5 bg-green-300/30 rounded-full blur-sm animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Animated wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-blue-300/20 via-cyan-200/30 to-blue-300/20 transform -skew-y-1"></div>

      <div className="relative z-10 flex justify-center items-center py-12 px-8">
        <div className="relative group">
          {/* Glow effect behind text */}
          <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl group-hover:bg-white/20 transition-all duration-500"></div>

          {/* Main logo container */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20 shadow-2xl group-hover:scale-105 transition-all duration-300">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-center group-hover:tracking-wider transition-all duration-300">
              {/* Animated palm tree */}
              <span
                className="inline-block text-5xl md:text-6xl lg:text-7xl animate-bounce mr-4"
                style={{ animationDuration: "2s" }}
              >
                🌴
              </span>

              {/* Main text with gradient */}
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Far Away
              </span>

              {/* Animated suitcase */}
              <span
                className="inline-block text-5xl md:text-6xl lg:text-7xl animate-bounce ml-4"
                style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
              >
                🧳
              </span>
            </h1>

            {/* Subtitle */}
            <div className="mt-2 text-center">
              <p className="text-white/80 text-lg md:text-xl font-medium tracking-wide">
                Your Adventure Awaits
              </p>

              {/* Decorative elements */}
              <div className="flex justify-center items-center mt-3 gap-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <span className="text-yellow-300 text-sm animate-pulse">
                  ✈️
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div
                  className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400"></div>
    </div>
  );
}
