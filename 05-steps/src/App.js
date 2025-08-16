import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}> {messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>
              Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3> Step {step} :</h3> {messages[step - 1]}
      {children}
    </div>
  );
}
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/*==============
     DATE COUNTER CHALLENGE
================

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [slider, setSlider] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  const dateString = date.toDateString(); // convert to string after adding days

  function handleCountMinus() {
    setCount((c) => c - slider);
  }
  function handleCountPlus() {
    setCount((c) => c + slider);
  }

  function handleStep(current) {
    setSlider(Number(current));
  }

  function clearAll() {
    setCount(0);
    setSlider(1);
  }

  return (
    <>
      <div className="container">
        <input
          type="range"
          min="0"
          max="10"
          value={slider}
          onChange={(e) => {
            handleStep(Number(e.target.value));
          }}
        />
        <p>Step: {slider}</p>
      </div>
      <div className="container">
        <button onClick={handleCountMinus}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountPlus}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{dateString}</span>
      </p>
      {count !== 0 || slider !== 1 ? (
        <button onClick={clearAll}>reset</button>
      ) : null}
    </>
  );
}
*/
