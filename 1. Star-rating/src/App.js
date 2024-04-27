import "./styles.css";

import StarRating from "./components/react-rating";

export default function App() {
  return (
    <div className="App">
      <StarRating limit={6} rating={3} />
    </div>
  );
}
