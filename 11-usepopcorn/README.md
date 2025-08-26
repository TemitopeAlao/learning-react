# 🍿 usePopcorn

A movie search and watchlist app built while learning React (based on Jonas Schmedtmann’s React course).
This project was part of my **React learning journey**, and I used it to practice and solidify key React concepts—from state management to custom hooks.

---

## 🚀 Features

- Search movies from the [OMDb API](https://www.omdbapi.com/)
- View detailed movie info (runtime, actors, director, IMDb rating, etc.)
- Rate movies with a custom ⭐️ Star Rating component
- Add movies to a **watched list**
- See a summary of your watched movies (average ratings + runtime)
- Persist watched movies in **localStorage** (so data doesn’t reset on reload)
- Keyboard shortcuts:

  - **Escape** → Close movie details
  - **Enter** → Focus on the search bar

---

## 📚 What I Learned

While building this project, I got hands-on practice with:

### 🔑 State Management

- `useState` → for UI state like search queries, selected movie ID, ratings, etc.
- **Derived state** → calculating averages instead of storing them directly.
- **Lifting state up** → sharing movie data between components.

### 🔁 Side Effects

- `useEffect` for:

  - Fetching movie data from OMDb
  - Changing the page title dynamically based on the selected movie
  - Listening to keydown events and cleaning them up

### 🎯 Custom Hooks

- **`useMovies`** → handle API requests and manage loading + error state.
- **`useLocalStorageState`** → sync state with localStorage so data persists.
- **`useKey`** → custom hook for keyboard shortcuts.

This was my first time really **extracting reusable logic** into hooks—making the code cleaner and easier to reason about.

### 🛠 Refs

- `useRef` for:

  - Managing focus on the search input
  - Tracking rating decision counts without triggering re-renders

### 🧩 Component Patterns

- Split UI into small, reusable components:

  - `NavBar`, `Search`, `MovieList`, `MovieDetails`, `WatchedSummary`, etc.

- **Conditional rendering** → show loader, error messages, or results depending on state.
- **Controlled components** → for the search input.

---

## 🧑‍💻 My Journey

At first, the project looked intimidating, but breaking it down step by step taught me:

- How React apps **scale in complexity** (from small components to a whole app).
- The importance of **thinking in states**: what data the UI depends on, and where to store it.
- How powerful **custom hooks** can be when you see repeated patterns.
- Why `useRef` is not just for DOM elements—it’s also for storing mutable values that shouldn’t trigger renders.

This project gave me a deeper confidence in React, and I now feel more comfortable moving from “tutorial React” into writing my own projects.

---

## ⚡ Tech Stack

- React (hooks + functional components)
- OMDb API
- LocalStorage
