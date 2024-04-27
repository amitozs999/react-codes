import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Settings = () => <h1>Settings</h1>;
const CatchRoute = () => <h1>404</h1>;

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        {/* iske ilava anything then 404 */}
        <Route path="*" element={<CatchRoute />} />
      </Routes>
    </Router>
  );
}
