# ⭐ Star Rating Component (React)

This project is a reusable Star Rating Component built in React.

It allows users to:

-Click stars to set a rating

-Hover over stars to preview a temporary rating

-Pass props to customize color, size, messages, and more

-Share the rating back to parent components through callback functions

## 🔑 What I Learned

1. PropTypes

PropTypes helps validate the props passed into a component.

It prevents bugs by warning when props are of the wrong type.

Example from the code:

StarRating.propTypes = {
maxRating: PropTypes.number,
size: PropTypes.number,
defaultRating: PropTypes.number,
color: PropTypes.string,
messages: PropTypes.arrayOf(PropTypes.string),
className: PropTypes.string,
onSetRating: PropTypes.func,
};

This ensures that:

-maxRating must be a number

-messages must be an array of strings

-onSetRating must be a function, etc.

2. Prop Drilling

Prop drilling means passing props down multiple levels of components.

In this project, we passed onSelectMovie, onSetRating, etc., down to child components so they can communicate back with the parent.

Example:

<Movie
  movie={movie}
  key={movie.imdbID}
  onSelectMovie={onSelectMovie}
/>

The onSelectMovie prop is passed from App → MovieList → Movie.

Even though App is the one that needs the selected movie ID, the Movie child calls it when clicked. That’s prop drilling in action.

3. Destructuring Props

Destructuring makes it easy to pull out props directly instead of writing props.something.

Example:

export default function StarRating({
maxRating = 8,
color = "#fcc419",
size = 48,
className = "",
messages = [],
defaultRating = 0,
onSetRating,
})

Here: maxRating, color, size etc. are destructured directly from the props object.

Default values are also set in case props are not passed in.

4. Reusable Components

The Star component was separated out so that each star could be reused inside a loop (Array.from).

The StarRating component is fully customizable through props, making it reusable in different parts of the app.

## 📚 Key Takeaways

PropTypes = Type checking & bug prevention

Prop Drilling = Passing props down to child components for communication

Destructuring = Cleaner and more readable props handling

Components should be reusable and customizable via props

🔥 This project strengthened my understanding of state management, prop handling, and how to build flexible UI components in React.
