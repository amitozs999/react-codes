import { useState } from "react";

import { useNavigate } from "react-router-dom";
//helps to go to the specific URL, forward or backward pages

export default function Form() {
  const [name, setName] = useState("g");
  const [age, setAge] = useState("1");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "namelabel" ? setName(value) : setAge(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* //onChange={(e) => setName(e.target.value)} can do this also */}
      <label>
        Your name
        <input
          type="text"
          value={name}
          onChange={handleChange}
          name="namelabel"
        />
      </label>
      <label>
        Favorite age
        <input
          type="text"
          value={age}
          onChange={handleChange}
          name="agelabel"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
