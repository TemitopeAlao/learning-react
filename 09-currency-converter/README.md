# Currency Converter

A simple React app that converts currencies in real time using the [Exchange Rate API](https://open.er-api.com/).

This project was built as part of a **challenge given by Jonas**, and it helped me practice key React concepts like `async/await`, API calls, and dependency arrays in `useEffect`.

---

## 🚀 Features

- Convert between multiple currencies (USD, EUR, NGN, GBP, CAD, INR, JPY).
- Uses `async/await` to fetch real-time exchange rates.
- Smart handling when both currencies are the same.
- Disables inputs while fetching data (`isLoading` state).
- Clean UI with dynamic results.

---

## 🧑‍💻 What I Practiced

### 1. **Async & Await**

- Used to fetch currency exchange rates from the API.
- Example:

```js
async function fetchConverter() {
  const res = await fetch(`https://open.er-api.com/v6/latest/${convertFrom}`);
  const data = await res.json();
  const rates = data.rates[convertTo];
  setResult(amount * rates);
}
```

This ensures the code waits for the API response before proceeding.

---

### 2. **Dependency Array in useEffect**

- The app updates the conversion whenever the **amount**, **convertFrom**, or **convertTo** changes.
- That’s controlled using the dependency array in `useEffect`:

```js
useEffect(() => {
  // fetch logic
}, [amount, convertFrom, convertTo]);
```

This prevents unnecessary API calls and makes the logic predictable.

---

### 3. **Dynamic Object Access**

- In JavaScript, you can access object properties dynamically using brackets `[]`.

```js
const rates = data.rates[convertTo];
```

## 📝 Notes

- This was a fun practice project to strengthen my understanding of **async/await** and **useEffect**.
- I also practiced handling **loading states** and **dynamic rendering** in React.
