import "./styles.css";
import TransferList from "./TransferList";

import { useState } from "react";
export default function App() {
  return (
    <div>
      <div className="container">
        <h1 className="font-bold text-xl">Transfer List</h1>

        <TransferList />
      </div>
    </div>
  );
}
