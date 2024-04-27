import { useState } from "react";

export default function Search() {
  const [list, setList] = useState(["apple", "kiwi", "pears"]);

  const [searchText, setSearchText] = useState("");

  let searchResultlist = list.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="div">
      <input
        placeholder="type here"
        onChange={(e) => setSearchText(e.target.value)}
      />

      <ul>
        {searchResultlist.map((item) => (
          <li key={item}> {item} </li>
        ))}
      </ul>

      {/* <ul>
        <li> 1</li>
        <li> 2</li>
        <li> 3</li>
      </ul> */}
    </div>
  );
}
