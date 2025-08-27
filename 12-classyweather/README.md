# 🌦 Classy Weather (Class Components Version)

## 🧑‍💻 Why Class Components?

Even though modern React development mostly uses **functional components with hooks**, learning class components is important because:

- It helps me understand **how React worked before hooks**.
- Many older codebases still use class components, so I’ll need to know how to read and work with them.
- Lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` give a clear view of how React handles updates and side effects.

This project forced me to map those lifecycle methods to the `useEffect` hook in my head, which made me understand both patterns better.

---

## ⚡ What This Project Does

- Fetches a location from the **Open-Meteo API**.
- Gets the forecast for the next few days.
- Displays weather icons, min/max temperatures, and the day.
- Saves the last searched location into **localStorage**, so it’s there after a reload.

---

## 🛑 Issues I Faced

- Remembering that in class components, I can’t directly use `useState` or `useEffect`.
- At first, I messed up `componentDidUpdate` by comparing the whole state object instead of just the specific value (location).
- Managing `this` and binding methods felt clunky compared to functional components.
- Forgetting that **`setState` is asynchronous** led to a few bugs.

---

## ✅ What I Now Understand

- How to fetch and update state inside `componentDidMount` and `componentDidUpdate`.
- How `this.state` and `this.setState` work differently from the `useState` hook.
- That `componentWillUnmount` is where cleanup (like aborting requests or clearing intervals) would go.
- The mapping between lifecycle methods and `useEffect`.

---

## 🚀 Next Steps

The next project I’ll be adding to this repo will be **recreating this exact weather app using functional components**.
That way, I can directly compare class-based and functional approaches and cement my understanding of hooks like `useEffect` and `useState`.

---

## ⚠️ Note

This project is **not my original idea**.
It’s from Jonas Schmedtmann’s React course.
I’m just rebuilding it as part of my learning journey.
