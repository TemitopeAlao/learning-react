import { useState, useEffect } from "react";

const KEY = "e8daaf2f";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    //callBack?.();
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        // First check: handle network/HTTP errors
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        // Handle invalid queries or missing movies
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    //handleCloseMovie();

    fetchMovies();

    // Cleanup (aborts the fetch if query changes or component unmounts)
    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error };
}
