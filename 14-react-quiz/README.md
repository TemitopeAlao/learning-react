# Quiz App – Learning `useReducer` in React

This project is part of my React learning journey. I built a quiz application to practice **state management with `useReducer`**, and to understand how to structure an app around different states such as loading, active, and finished.

---

## 🚀 Features

- Fetches quiz questions from an API (`json-server` running locally).
- Supports different app states:

  - **Loading** (while fetching questions)
  - **Error** (if the fetch fails)
  - **Ready** (before the quiz starts)
  - **Active** (while answering questions)
  - **Finished** (showing final score and highscore).

- Tracks points based on correct answers.
- Timer counts down and auto-finishes the quiz when it hits zero.
- Highscore system that updates when a new best score is achieved.
- Restart functionality to retake the quiz.

---

## 📚 What I Learned

- How to use the **`useReducer` hook** instead of `useState` when managing complex state.
- Designing a **state machine** approach: `"loading" → "ready" → "active" → "finished"`.
- How to dispatch actions (`start`, `newAnswer`, `nextQuestion`, `finish`, `restart`, `tick`) and update state accordingly.
- How to derive state (like `maxPossiblePoints`) instead of storing it directly.
- Passing `dispatch` down to child components so they can trigger state changes.
- Using `useEffect` to fetch data on component mount.

---

## ⚡ Challenges I Faced

- **Understanding `useReducer` logic**: At first, I struggled to connect how actions and the reducer worked together. Breaking down each action case helped.
- **Managing the timer**: Setting up a countdown that dispatches a `tick` action every second was tricky. I had to ensure it stopped at zero and switched the quiz to `"finished"`.
- **Conditional rendering**: Deciding what to show depending on `status` sometimes felt messy, but learning to structure components around state made it clearer.
- **Data fetching**: I had issues with `fetch` at first (wrong endpoint, API not running). Running `json-server` properly solved it.
- **File structure**: Learning how to split UI into components (`Header`, `Main`, `Footer`, `Question`, `Timer`) made the app easier to manage.

---

## 🛠️ Tech Stack

- **React** (with hooks: `useReducer`, `useEffect`)
- **json-server** (to mock API and provide questions)

## 🌱 Next Steps

- Persist highscores to **localStorage** so they remain after refresh.
- Add difficulty levels or categories.
