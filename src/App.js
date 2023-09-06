import "./styles.css";
import DisplayCards from "./components/DisplayCards";
import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
    showAnswer: false
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
    showAnswer: false
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
    showAnswer: false
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
    showAnswer: false
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
    showAnswer: false
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
    showAnswer: false
  },
];

export default function App() {
  const [questionId, setQuestionId] = useState(null);

  return (
    <div className="flex flex-col items-center gap-16  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
      <h1 className="font-bold text-6xl uppercase">Flashcard App</h1>
      <DisplayCards questions={questions} questionId={questionId} setQuestionId={setQuestionId} />
    </div>
  );
}
