# 📚 React FlashCards – Learning Notes

🔹 What It Does
Shows a list of Q&A cards.

Click to toggle between question and answer.

Only one card open at a time.

##🔹 What I Learned
State: Used useState(null) to track the open card.

Mapping: Rendered cards from an array with .map() and unique key.

Conditional Rendering: Show answer if id === selectedId, else show question.

Click Logic: setSelectedId(id !== selectedId ? id : null);

         Example scenario:

No card selected yet → selectedId is null.

Click card with ID 7336 → id !== selectedId is true → store 7336 in state → that card becomes active.

Click the same card again → id !== selectedId is false → store null → no card is active now.

Click a different card → sets selectedId to that new ID.
