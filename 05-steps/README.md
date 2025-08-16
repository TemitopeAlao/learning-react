## 1. Steps Component

### Features

- Displays a **3-step process**.
- Navigation buttons for **Previous** and **Next**.
- The active step is highlighted visually.
- A close button (`×`) toggles the visibility of the entire component.
- Reusable **Button** and **StepMessage** components.

### Key Learnings

- **Conditional rendering** (`isOpen` state to hide/show).
- **Dynamic class names** (`step >= 2 ? "active" : ""`).
- **Reusable component design** (Button & StepMessage).
- Handling **click events** with custom logic.

---

### Personal Log

This practice project came directly from Jonas’ React course.

The Steps Component taught me the importance of reusable UI pieces. I liked how I could create one <Button /> and style it differently with props. At first, I forgot why useState needed to be in the parent (for step control), but it made sense once I saw the state flowing down.
