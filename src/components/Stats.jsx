import React from "react";

export default function Stats({ items, setItems }) {
  const numItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage =
    numItems === 0 ? 0 : Math.round((numOfPacked / numItems) * 100);

  return (
    <footer className="fixed flex justify-center items-center bottom-0 left-0 w-full bg-gray-100 py-4 shadow-md">
      <em className="text-center text-sm sm:text-base text-gray-800 font-medium">
        {percentage === 100
          ? "Well done! You have successfully packed all items"
          : `🧳 You have ${numItems} item(s) on your list, and you already packed
        ${numOfPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

// import React from "react";

// export default function Stats({ items }) {
//   if (!items || items.length === 0) {
//     return (
//       <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 backdrop-blur-sm border-t border-white/10 py-6 shadow-2xl">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-center">
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10 shadow-lg">
//               <div className="flex items-center gap-3">
//                 <span className="text-3xl animate-bounce">🎒</span>
//                 <p className="text-white/80 font-medium text-lg">
//                   Start adding items to your packing list!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   }

//   const numItems = items.length;
//   const numOfPacked = items.filter((item) => item.packed).length;
//   const percentage =
//     numItems > 0 ? Math.round((numOfPacked / numItems) * 100) : 0;

//   return (
//     <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 backdrop-blur-sm border-t border-white/10 py-6 shadow-2xl">
//       <div className="container mx-auto px-4">
//         {percentage === 100 ? (
//           // Celebration state
//           <div className="flex items-center justify-center">
//             <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl px-8 py-6 border border-green-400/30 shadow-2xl relative overflow-hidden">
//               {/* Animated background */}
//               <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-400/10 to-teal-400/10 animate-pulse"></div>

//               <div className="relative flex items-center gap-4">
//                 <div className="flex gap-2">
//                   <span
//                     className="text-3xl animate-bounce"
//                     style={{ animationDelay: "0s" }}
//                   >
//                     🎉
//                   </span>
//                   <span
//                     className="text-3xl animate-bounce"
//                     style={{ animationDelay: "0.2s" }}
//                   >
//                     ✅
//                   </span>
//                   <span
//                     className="text-3xl animate-bounce"
//                     style={{ animationDelay: "0.4s" }}
//                   >
//                     🧳
//                   </span>
//                 </div>
//                 <div className="text-center">
//                   <h3 className="text-2xl font-bold text-white mb-1">
//                     All Packed & Ready!
//                   </h3>
//                   <p className="text-green-200 font-medium">
//                     You've packed all {numItems} items. Have an amazing trip! ✈️
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           // Progress state
//           <div className="flex items-center justify-center">
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10 shadow-lg min-w-[400px]">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <span className="text-2xl">🧳</span>
//                   <div>
//                     <h3 className="text-white font-semibold text-lg">
//                       Packing Progress
//                     </h3>
//                     <p className="text-white/70 text-sm">
//                       {numOfPacked} of {numItems} items packed
//                     </p>
//                   </div>
//                 </div>

//                 {/* Circular progress indicator */}
//                 <div className="relative w-16 h-16">
//                   <svg
//                     className="w-16 h-16 transform -rotate-90"
//                     viewBox="0 0 36 36"
//                   >
//                     {/* Background circle */}
//                     <path
//                       d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                       fill="none"
//                       stroke="rgba(255,255,255,0.1)"
//                       strokeWidth="2"
//                     />
//                     {/* Progress circle */}
//                     <path
//                       d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                       fill="none"
//                       stroke="url(#gradient)"
//                       strokeWidth="2"
//                       strokeDasharray={`${percentage}, 100`}
//                       className="transition-all duration-700 ease-out"
//                     />
//                     <defs>
//                       <linearGradient
//                         id="gradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="100%"
//                       >
//                         <stop offset="0%" stopColor="#10b981" />
//                         <stop offset="100%" stopColor="#06b6d4" />
//                       </linearGradient>
//                     </defs>
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-white font-bold text-sm">
//                       {percentage}%
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Progress bar */}
//               <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
//                 <div
//                   className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-700 ease-out"
//                   style={{ width: `${percentage}%` }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
//                 </div>
//               </div>

//               {/* Motivational message */}
//               <div className="mt-3 text-center">
//                 <p className="text-white/80 text-sm">
//                   {percentage < 25 &&
//                     "Just getting started! Keep adding items 📝"}
//                   {percentage >= 25 &&
//                     percentage < 50 &&
//                     "Good progress! You're on your way 🚀"}
//                   {percentage >= 50 &&
//                     percentage < 75 &&
//                     "More than halfway there! 💪"}
//                   {percentage >= 75 &&
//                     percentage < 100 &&
//                     "Almost ready for your adventure! 🎯"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </footer>
//   );
// }
