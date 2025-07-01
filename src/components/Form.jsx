import React, { useState } from "react";

export default function Form({ items = [], setItems = () => {} }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleItemsUpdate(item) {
    setItems((items) => [...items, item]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!description.trim()) return;

    setIsSubmitting(true);

    // Add a subtle delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 300));

    const newItem = {
      description: description.trim(),
      quantity,
      packed: false,
      id: Date.now(),
    };

    handleItemsUpdate(newItem);

    setDescription("");
    setQuantity(1);
    setIsSubmitting(false);
  }

  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-blue-600/20 animate-pulse z-0"></div>

      {/* Floating orbs - moved to lower z-index */}
      <div className="absolute top-4 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-bounce z-1"></div>
      <div className="absolute bottom-6 right-12 w-20 h-20 bg-cyan-400/20 rounded-full blur-2xl animate-pulse z-1"></div>
      <div
        className="absolute top-8 right-20 w-12 h-12 bg-emerald-400/30 rounded-full blur-lg animate-bounce z-1"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Main content with higher z-index */}
      <div className="relative z-20 flex lg:flex-row flex-col justify-center items-center px-8 py-12 gap-6">
        {/* Glowing title */}
        <div className="relative group">
          <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg tracking-wide group-hover:scale-105 transition-transform duration-300">
            What do you need for your{" "}
            <span className="inline-block animate-bounce text-2xl">🌟</span>{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent font-extrabold">
              adventure
            </span>
            ?
          </h3>
          <div className="absolute -inset-2 bg-white/5 rounded-lg blur-sm group-hover:bg-white/10 transition-colors duration-300 -z-10"></div>
        </div>

        {/* Quantity selector with glow effect */}
        <div className="relative group z-30">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="relative z-40 appearance-none bg-white/95 backdrop-blur-sm rounded-xl px-6 py-3 pr-10 font-semibold text-gray-800 shadow-lg border-2 border-white/20 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/30 focus:outline-none transition-all duration-300 hover:bg-white hover:shadow-xl cursor-pointer"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num} className="text-gray-800 bg-white">
                {num}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none z-50">
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-cyan-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10"></div>
        </div>

        {/* Input field with animated border */}
        <div className="relative group flex-1 max-w-xs z-30">
          <input
            className="relative z-40 w-full bg-white/95 backdrop-blur-sm rounded-xl px-6 py-3 font-medium text-gray-800 placeholder-gray-500 shadow-lg border-2 border-white/20 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/30 focus:outline-none transition-all duration-300 hover:bg-white hover:shadow-xl"
            type="text"
            placeholder="Pack your dreams..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          />
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10"></div>
        </div>

        {/* Animated submit button */}
        <div className="relative group z-30">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || !description.trim()}
            className="relative z-40 overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 text-white font-bold rounded-xl px-8 py-3 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-400/50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Adding...
                </>
              ) : (
                <>
                  <span>Add to Pack</span>
                  <span className="text-lg animate-pulse">✨</span>
                </>
              )}
            </span>
          </button>

          {/* Button glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 -z-10"></div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
    </div>
  );
}
