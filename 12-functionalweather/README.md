# 🌦️ Classy Weather (Functional Component Version)

This project is a **refactored version** of my earlier weather app, originally built using **class-based React components**.
In this version, I converted the entire app into **functional components** using **React Hooks** (`useState`, `useEffect`).

The goal was to modernize the code, simplify state management, and make it more readable and maintainable.

---

## 🚀 Features

- Search for any city to get its **7-day weather forecast**
- Displays:

  - Daily **min and max temperature**
  - **Weather condition icons** (mapped from WMO codes)
  - **Day labels** (e.g., Today, Mon, Tue)

- Remembers the last searched location using **localStorage**
- Uses the [Open-Meteo API](https://open-meteo.com/) for both **geocoding** and **forecast data**

---

## 🔄 What Changed (Class → Functional)

### Before:

- Used **class components** with `this.state` and `this.setState`.
- Lifecycle methods like `componentDidMount` and `componentDidUpdate` handled fetching and local storage.

### Now:

- Converted everything to **functional components**.
- Used **`useState`** for managing location, loading state, and weather data.
- Used **`useEffect`** to:

  - Load saved location on mount
  - Fetch weather data when the location changes

- Broke the app down into smaller functional components:

  - `<App />` → main logic and state
  - `<Input />` → search box
  - `<Weather />` → weather list container
  - `<Day />` → single-day forecast

This made the code more **modular, readable, and closer to current React best practices**.

---

## 🛠️ Technologies Used

- **React (functional components + hooks)**
- **JavaScript (ES6+)**
- **Open-Meteo API**
- **LocalStorage**

## 💡 Key Learnings

- How to replace class lifecycle methods with `useEffect`.
- Cleaner state handling with `useState`.
- Better separation of concerns by splitting into small functional components.
