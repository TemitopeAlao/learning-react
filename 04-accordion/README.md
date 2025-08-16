# React Accordion Component (Jonas Course Practice)

This project is one of the practice components I built while following **Jonas Schmedtmann’s React course**.  
The goal was to understand how to manage **state**, **props**, and **conditional rendering** in React by creating a reusable Accordion component.

---

## What I Learned

- How to structure data as an array (`faqs`) and pass it into a component.
- How to use `useState` to keep track of the currently open Accordion item.
- How to **lift state up**:
  - The parent `<Accordion />` holds the `curOpen` state.
  - Each `<AccordionItem />` receives that state and a function to update it.
- How to conditionally render content (`{isOpen && <div>...</div>}`).
- How to dynamically add classes in JSX using template literals.

---

## Code Flow

1. Defined a list of FAQs in an array of objects.
2. The `<Accordion />` maps over this array and renders multiple `<AccordionItem />` components.
3. Each `<AccordionItem />`:
   - Checks if it’s the currently open item (`isOpen`).
   - Toggles itself open/closed when clicked.
   - Displays `+` or `-` depending on its state.

---

## Key Takeaway

Only one Accordion item can be open at a time.  
This helped me practice the **idea of centralized state management in the parent** and passing state/functions down to children via props.

## Credit

This is a practice project from the **React course by Jonas Schmedtmann**, built as part of my learning journey.

---

## Personal Log

I struggled a bit at first with the idea of **lifting state up**, because it wasn’t obvious to me why the parent should manage which item is open.
But after building this, I get it now:

- If the state lived in each child, multiple items could be open at once.
- By keeping it in the parent, I can control the flow better.

This project made me more confident with:

- Passing props
- Handling click events
- Writing cleaner reusable components

It’s a small step, but I can already feel how React is starting to click for me.
