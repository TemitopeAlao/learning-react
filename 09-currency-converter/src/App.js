import { useEffect, useState } from "react";

const currencies = ["USD", "EUR", "NGN", "GBP", "CAD", "INR", "JPY"];
export default function App() {
  const [amount, setAmount] = useState("");
  const [convertFrom, setConvertFrom] = useState("USD");
  const [convertTo, setConvertTo] = useState("EUR");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchConverter() {
      setIsLoading(true);
      const res = await fetch(
        `https://open.er-api.com/v6/latest/${convertFrom}`
      );
      const data = await res.json();
      console.log(data);
      //  [] in JavaScript lets you access object properties dynamically (when you don’t know the key name in advance).
      const rates = data.rates[convertTo]; // → 3.6725
      console.log(rates);
      setResult(amount * rates);
    }
    if (convertFrom === convertTo) return setResult(amount);
    if (amount > 0) fetchConverter();
  }, [amount, convertFrom, convertTo]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={convertFrom}
        onChange={(e) => setConvertFrom(e.target.value)}
        disabled={isLoading}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <select
        value={convertTo}
        onChange={(e) => setConvertTo(e.target.value)}
        disabled={isLoading}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <p>
        OUTPUT : {result !== null ? `${result.toFixed(2)} ${convertTo}` : "--"}
      </p>
    </div>
  );
}
