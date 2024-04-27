import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Results from "../Results";
import Form from "./Form";
export default function App() {
  return (
    <Router>
      {/*  / pe link toh open form comp  (default) so open Form on start
       /result pe link toh open result comp */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}
