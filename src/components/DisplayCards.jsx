import React from "react";

function DisplayCards({ questions, questionId, setQuestionId }) {
  const handleAnswer = (id) => {
    setQuestionId(id);
    console.log(questionId);
  };

  return (
    <div className="grid grid-cols-3 gap-10 text-center">
      {questions.map((question) => (
        <p
          key={question.id}
          className="border-double border-4 border-black rounded-md p-6 pt-12 pb-12 hover:bg-gray-700 hover:text-white cursor-pointer"
          onClick={() => handleAnswer(question.id)}
        >
          {question.id === questionId ? (
            <span>Answer: {question.answer}</span>
          ) : (
            <span>Question: {question.question}</span>
          )}
        </p>
      ))}
    </div>
  );
}

export default DisplayCards;
