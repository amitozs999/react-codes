import "./styles.css";
import useLocalStorage from "./UseLocalStorage";

export default function App() {
  const [storedValue, setStoredValue] = useLocalStorage(
    "select-value",
    "light" //default selected value is light , store it in localstorage
  );

  return (
    <div>
      <select
        className="select"
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)} //pass this new value in local stoage hook vo, store karega local me
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>

      <p className="desc">
        Value from local storage: <span>{storedValue}</span>
      </p>
    </div>
  );
}
