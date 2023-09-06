import React from "react";

function DisplayCards({ questions, setQuestions }) {
  const handleAnswer = (id) => {
    setQuestions(
      questions.map((question) => {
        return {
          id: question.id,
          question: question.question,
          answer: question.answer,
          showAnswer: id === question.id ? true : false,
        };
      })
    );
  };

  return (
    <div className="grid grid-cols-3 gap-10 text-center">
      {questions.map((question) => (
        <p
          key={question.id}
          className="border-double border-4 border-black rounded-md p-6 pt-12 pb-12 hover:bg-gray-700 hover:text-white cursor-pointer"
          onClick={() => handleAnswer(question.id)}
        >
          {!question.showAnswer ? (
            <span>Question: {question.question}</span>
          ) : (
            <span>Answer: {question.answer}</span>
          )}
        </p>
      ))}
    </div>
  );
}

export default DisplayCards;
