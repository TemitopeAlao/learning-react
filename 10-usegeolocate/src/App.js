import { useState } from "react";
import { useGeolocation } from "./useGeolocation";

export default function App() {
  const [countClicks, setCountClicks] = useState(0);
  const { isLoading, error, lat, lng, getPosition } = useGeolocation();

  function handleGetPosition() {
    setCountClicks((count) => count + 1);
    getPosition(); // ✅ call the hook’s function, not the hook itself
  }

  return (
    <div>
      <button onClick={handleGetPosition} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get my position"}
      </button>

      {error && <p>Error: {error}</p>}
      {lat && lng && (
        <p>
          Your location: {lat}, {lng}
        </p>
      )}
      <p>You clicked {countClicks} times</p>
    </div>
  );
}
