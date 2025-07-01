import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items = [],
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const packedCount = items.filter((item) => item.packed).length;
  const totalCount = items.length;
  const packingProgress = totalCount > 0 ? (packedCount / totalCount) * 100 : 0;
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Dynamic animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-blue-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-16 w-40 h-40 bg-amber-300/15 rounded-full blur-2xl animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-1/3 left-10 w-24 h-24 bg-red-400/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-32 w-28 h-28 bg-yellow-400/10 rounded-full blur-2xl animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      ></div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center pt-8 px-4 min-h-screen">
        {/* Header section with progress */}
        <div className="mb-8 text-center">
          <div className="relative group mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl tracking-wide mb-2 group-hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                Packing List
              </span>
              <span className="ml-3 text-3xl animate-bounce">🎒</span>
            </h2>
            <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-sm group-hover:bg-white/10 transition-colors duration-300"></div>
          </div>

          {/* Progress indicator */}
          {totalCount > 0 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/90 font-semibold">Progress</span>
                <span className="text-white font-bold text-lg">
                  {packedCount}/{totalCount} packed
                </span>
              </div>

              {/* Progress bar */}
              <div className="relative w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${packingProgress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Progress percentage */}
              <div className="mt-2 text-center">
                <span className="text-2xl font-bold text-white drop-shadow-lg">
                  {Math.round(packingProgress)}%
                </span>
                <span className="text-white/70 ml-2">complete</span>
              </div>
            </div>
          )}
        </div>

        {/* Items container */}
        {items.length === 0 ? (
          // Empty state
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl">
              <div className="text-8xl mb-6 animate-bounce">🧳</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for Adventure!
              </h3>
              <p className="text-white/70 text-lg max-w-md">
                Your packing list is empty. Start adding items above to organize
                your perfect trip.
              </p>
            </div>
          </div>
        ) : (
          // Items grid
          <div className="flex-1 w-full max-w-6xl">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedItems.map((item, index) => (
                  <li
                    key={item.id}
                    className="transform transition-all duration-500 hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-lg hover:bg-white/15 hover:shadow-xl transition-all duration-300 group">
                      <Item
                        id={item.id}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                        key={item.id}
                        description={item.description}
                        quantity={item.quantity}
                        packed={item.packed}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Actions section */}
        {items.length > 0 && (
          <div className="mt-8 mb-8 w-full max-w-4xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Sort dropdown */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                <div className="flex items-center gap-4">
                  <span className="text-white/90 font-semibold text-lg flex items-center gap-2">
                    <span className="text-xl">🔄</span>
                    Sort by:
                  </span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white font-medium appearance-none cursor-pointer hover:bg-white/25 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 min-w-48"
                    >
                      <option value="input" className="bg-gray-800 text-white">
                        Sort by Order
                      </option>
                      <option
                        value="description"
                        className="bg-gray-800 text-white"
                      >
                        Sort by Description
                      </option>
                      <option value="packed" className="bg-gray-800 text-white">
                        Sort by Packed Status
                      </option>
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-white/70"
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
                  </div>
                </div>
              </div>

              {/* Clear list button */}
              <button
                onClick={onClearList}
                className="group relative bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm border border-red-400/30 hover:border-red-400/50 rounded-xl px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-400/50 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg group-hover:animate-pulse">🗑️</span>
                  Clear List
                </span>

                {/* Subtle animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 via-transparent to-red-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        )}
        {/* Achievement badges for completion */}
        {packingProgress === 100 && totalCount > 0 && (
          <div className="fixed top-20 right-8 z-50 animate-bounce">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full shadow-2xl border-2 border-white/30">
              <span className="font-bold">🎉 All Packed!</span>
            </div>
          </div>
        )}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
