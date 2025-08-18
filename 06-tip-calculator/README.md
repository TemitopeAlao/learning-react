# React Tip Calculator

A simple React app that calculates how much you and a friend should tip based on service ratings.

## 📌 What I Learned

- **React State Management**

  - Used `useState` to store and update the bill amount and tip percentages.
  - Passed state and state setters between parent and child components using props.

- **Handling User Input**

  - Captured values from `<input>` and `<select>` elements.
  - Converted input values from strings to numbers for accurate calculations.

- **Component Structure**

  - Broke the app into reusable components:
    - `Bill` – Handles bill amount input.
    - `Select` – Lets a user choose a tip percentage.
    - `Output` – Shows total cost with tip.
    - `Reset` – Resets all values to default.

- **Props & Event Handling**

  - Passed functions as props to handle changes.
  - Used `onChange` and `onClick` events effectively.

- **Calculation Logic**
  - Calculated an average tip percentage from two ratings.
  - Converted percentage to a dollar tip amount based on the bill.
  - Displayed formatted total cost with tip.

## 🚀 How It Works

1. Enter the bill amount.
2. Select a tip percentage for you and for your friend.
3. See the total bill with the average tip.
4. Click **Reset** to clear all inputs.
