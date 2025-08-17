import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [rating, setRating] = useState(0);
  const [secondRating, setSecondRating] = useState(0);

  const handleBill = (value) => setBill(Number(value));
  const handlePercentage = (value) => setRating(Number(value));
  const handleSecondPercentage = (value) => setSecondRating(Number(value));

  const tip = (bill * (rating + secondRating)) / 2 / 100;
  const total = bill + tip;

  return (
    <div className="App">
      <Bill bill={bill} onHandleBill={handleBill} />

      <Select rate={rating} selectPer={handlePercentage}>
        How did you like the service?
      </Select>

      <Select rate={secondRating} selectPer={handleSecondPercentage}>
        How did your friend like the service?
      </Select>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} total={total} />
          <Reset
            setBill={setBill}
            setRating={setRating}
            setSecondRating={setSecondRating}
          />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onHandleBill }) {
  return (
    <div className="container">
      <label>How much was the bill?</label>
      <input
        type="number"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onHandleBill(e.target.value)}
      />
    </div>
  );
}

function Select({ children, rate, selectPer }) {
  return (
    <div className="container">
      <label>{children}</label>
      <select value={rate} onChange={(e) => selectPer(e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, total, tip }) {
  return (
    <p className="total">
      You can pay ${total} (${bill} + ${tip} tip)
    </p>
  );
}

function Reset({ setBill, setRating, setSecondRating }) {
  const handleClear = () => {
    setBill(0);
    setRating(0);
    setSecondRating(0);
  };
  return <button onClick={handleClear}>Reset</button>;
}
