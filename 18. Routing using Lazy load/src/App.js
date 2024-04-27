import "./styles.css";
import * as React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

//Code splitting  breaks the JavaScript into smaller chunks.
//React.lazy   will break the JavaScript into smaller chunks and load the chunks asynchronously.

const Home = React.lazy(() => import("./Home"));
const Newsletter = React.lazy(() => import("./Newsletter"));
const Dashboard = React.lazy(() => import("./Dashboard"));

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newsletter">Newsletter </Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      {/* The Suspense component loads the lazily-loaded component . The fallback
      prop is a component that will be rendered while the component is loading. */}

      {/*  React Suspense allows components to “wait” for something before rendering. React Suspense only supports dynamically loading components using React Lazy,
       While we wait for the lazy component to load, we can display a loading indication using the React Suspense component */}

      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}
