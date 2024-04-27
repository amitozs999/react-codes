import "./styles.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Employee from "./Employee";
import Ids from "./Ids";

export default function App() {
  return (
    <Router>
      <h2>Customer</h2>

      {/* //links to route to stud name comp */}

      <ul>
        <li>
          <Link to="/ram">Ram</Link>
        </li>
        <li>
          <Link to="/rakshman">Lakshman</Link>
        </li>
        <li>
          <Link to="/bheem">Bheem</Link>
        </li>
      </ul>

      <h2>Ids</h2>
      {/* //links to route to stud id comp */}

      <ul>
        <li>
          <Link to="/Ids/1">1</Link>
        </li>
        <li>
          <Link to="/Ids/2">2</Link>
        </li>
        <li>
          <Link to="/Ids/3">3</Link>
        </li>
        <li>
          <Link to="/Ids/4">4</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/:name" element={<Employee />} />
        {/* using useparams can extract /ram name=ram */}
        <Route path="/Ids/:id" element={<Ids />} />
        {/* using useparams can extract /Ids/4 id=4 */}
      </Routes>
    </Router>
  );
}
