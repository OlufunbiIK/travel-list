import React, { useState } from "react";

export default function DateCounter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  function addStep() {
    if (steps >= 0) {
      setSteps(steps + 1);

      if (steps === 10) {
        alert("Are you sure you want to go on?");
      }
    }
  }

  function minusStep() {
    if (steps > 0) {
      setSteps(steps - 1);
    }
  }

  function addCount() {
    if (steps >= 0) {
      setCount(count + steps);

      if (count === 10) {
        alert("Are you sure you want to go on?");
      }
    }
  }

  function minusCount() {
    if (count > 0) {
      setCount(count - steps);
    }
  }

  function handleReset(e) {
    e.preventDefault();
    setCount(0);
  }

  function handleScroll(e) {
    setSteps(Number(e.target.value));
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col max-w-[250px] w-full items-center justify-center">
        <div className="flex ">
          <input onChange={handleScroll} type="range" min={0} max={10} />
          <span>{steps}</span>
        </div>
        <div className="my-20 flex justify-center items-center gap-6">
          <button
            className={`py-2 px-6 ${
              steps >= 10 ? "bg-green-600" : "bg-green-300"
            }`}
            onClick={minusStep}
          >
            -
          </button>
          <p>{steps}</p>
          <button className="bg-red-300 py-2 px-6" onClick={addStep}>
            +
          </button>
        </div>

        <div className="my-20 flex justify-center items-center gap-6">
          <button className="py-2 px-6 bg-purple-600" onClick={minusCount}>
            -
          </button>
          <p>{count}</p>
          <button className="bg-yellow-300 py-2 px-6" onClick={addCount}>
            +
          </button>
        </div>

        <p className="text-center mb-4">
          We have {count} days left till{" "}
          {new Date(Date.now() + count * 86400000).toDateString()}
        </p>

        <button
          onClick={handleReset}
          className="bg-red-600 px-4 py-2 text-white rounded"
        >
          RESET
        </button>
      </div>
    </div>
  );
}
