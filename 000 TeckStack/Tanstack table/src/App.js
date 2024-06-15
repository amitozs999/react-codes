import "./styles.css";

import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

import MyTable from "./MyTable";

export default function App() {
  const Data = useLoaderData();
  // useEffect(() => {
  //   console.log(Data.data[0]);
  // });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <MyTable />
    </div>
  );
}
