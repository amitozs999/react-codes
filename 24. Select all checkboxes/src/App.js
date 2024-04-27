import "./styles.css";

import { useState } from "react";
import CheckBox from "./CheckBox";

import { list } from "./List";

export default function App() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedlistItems, setselectedlistItems] = useState([]); //stores id of selected checkboxes items
  const [listItems, setlistItems] = useState(list); //stores id of all checkboxes items

  const handleSelectAllCB = (e) => {
    const { checked } = e.target;
    setIsCheckAll(!isCheckAll);
    setselectedlistItems(listItems.map((li) => li.id)); //add all items id in selecteditem

    if (checked == false) {
      //remove all selected if unchecked
      setselectedlistItems([]);
    }
  };

  const handleOptionCB = (e) => {
    const { id, checked } = e.target; //default proprties in real time not param wali
    setselectedlistItems([...selectedlistItems, id]);

    if (checked == false) {
      //if not checked filter this checkbox out from selected list
      setselectedlistItems(selectedlistItems.filter((itemid) => itemid !== id));
    }
  };

  //console.log(selectedlistItems);

  return (
    <div>
      <CheckBox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAllCB}
        isChecked={isCheckAll}
      />
      Select All
      <br />
      <hr />
      {listItems.map(({ id, name }) => {
        return (
          <>
            <CheckBox
              key={id}
              type="checkbox"
              name={name}
              id={id}
              handleClick={handleOptionCB}
              isChecked={selectedlistItems.includes(id)} //just to update tick dont use to check in real time as based on usestae value will not be updated in realtime
            />
            {name}
          </>
        );
      })}
    </div>
  );
}
