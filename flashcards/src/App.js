import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      {/* Render the FlashCards component */}
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  // State to store the ID of the currently selected card
  const [selectedId, setSelectedId] = useState(null);

  // Function to handle card click
  // If a card is clicked, set it as selected
  // If the same card is clicked again, deselect it (set null)
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id} // Unique key for React's rendering
          onClick={() => handleClick(question.id)} // Select/deselect on click
          className={question.id === selectedId ? "selected" : ""} // Apply 'selected' CSS if active
        >
          <p>
            {/* Show answer if selected, otherwise show the question */}
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
