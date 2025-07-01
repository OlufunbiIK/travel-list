import React, { useEffect, useState } from "react";

export default function FlipCards() {
  const [questions, setQuestions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  async function LoadQuestions() {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&type=boolean"
      );
      const json = await response.json();
      console.log("API data:", json);

      if (json.response_code === 0 && Array.isArray(json.results)) {
        setQuestions(json.results);
      } else {
        console.warn("Response error or exhausted questions:", json);
      }
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
  }

  useEffect(() => {
    LoadQuestions();
  }, []);

  const handleFlip = (index) => {
    setSelectedId((prev) => (prev === index ? null : index));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Flip Card Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {questions.map((question, index) => (
          <div
            onClick={() => handleFlip(index)}
            key={index}
            className={`border rounded shadow p-4 min-h-[200px] flex flex-col justify-center items-center cursor-pointer select-none ${
              selectedId === index ? "bg-blue-500" : "bg-red-500"
            }`}
          >
            {selectedId === index ? (
              <p
                className="text-white font-semibold p-2 rounded"
                dangerouslySetInnerHTML={{ __html: question.correct_answer }}
              />
            ) : (
              <p
                className="text-white font-semibold p-2 rounded"
                dangerouslySetInnerHTML={{ __html: question.question }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
