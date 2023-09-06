import React from "react";

function DisplayCards({ questions }) {
  const toggleDisplay = (targetElement) => {
    targetElement.classList.contains("hidden")
      ? targetElement.classList.remove("hidden")
      : targetElement.classList.add("hidden");
  };

  const handleAnswer = (e) => {
    Array.from(e.target.children).forEach((element) => toggleDisplay(element));
  };

  return (
    <div className="grid grid-cols-3 gap-10 text-center">
      {questions.map((question) => (
        <p
          key={question.id}
          className="border-double border-4 border-black rounded-md p-6 pt-12 pb-12 hover:bg-gray-700 hover:text-white cursor-pointer"
          onClick={handleAnswer}
        >
          <span>Question: {question.question}</span>
          <span className="hidden">Answer: {question.answer}</span>
        </p>
      ))}
    </div>
  );
}

export default DisplayCards;
