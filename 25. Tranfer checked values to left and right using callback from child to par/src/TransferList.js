import React, { useState } from "react";
import { data } from "./Data";

import Container from "./Container";

const LIST_MAPPER = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
};

const DIRECTION = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
};

const TransferList = () => {
  const [items, setItems] = useState(data); //a;; items

  const [leftItems, setLeftItems] = useState(items); //abhi left me kis kisko add kara he (show on screen on when button clicked till then stay in list)
  const [rightItems, setRightItems] = useState([]);

  //jese new item clicked
  //set its checked value in list(wherever clicked left or right there list me)
  // (move on other side only when button clicked)

  const onChangeCustom = (id, checked, direction) => {
    //is wali me add karenge mew items ko
    let iteratableItems = direction === "LEFT" ? leftItems : rightItems;

    let newItems = iteratableItems.map((item) => {
      //UPDATED check value of this id items in list
      if (item.id === id) {
        return {
          ...item,
          checked: checked, //updating that obj... chnage checked val of that obj
        };
      } else {
        return item; //return same item obj in new arr
      }
    });

    if (direction === "LEFT") {
      setLeftItems(newItems);
    } else {
      setRightItems(newItems);
    }
  };

  const onClick = (direction) => {
    if (direction === DIRECTION.RIGHT) {
      // take checked items from leftArray and move it to rightArray.
      moveToRight();
    } else {
      // take checked items from rightArray and move it to leftArray.
      moveToLeft();
    }
  };

  const moveToRight = () => {
    // filter checked items
    let filtered = leftItems.filter((item) => item.checked);
    let remaining = leftItems.filter((item) => !item.checked);
    // mark them not checked
    let unchecked = filtered.map((item) => {
      //uncheck check wali item then send on right only
      return {
        ...item,
        checked: false,
      };
    });

    // push to right array
    let final = [...rightItems, ...unchecked]; //updated right items
    setRightItems(final);
    setLeftItems(remaining);
  };

  const moveToLeft = () => {
    // filter checked items
    let filtered = rightItems.filter((item) => item.checked);
    let remaining = rightItems.filter((item) => !item.checked);
    // mark them not checked
    let unchecked = filtered.map((item) => {
      return {
        ...item,
        checked: false,
      };
    });

    // push to left array
    let final = [...leftItems, ...unchecked];
    setLeftItems(final);
    setRightItems(remaining);
  };

  //lefts items
  //2 buttons
  //right items
  return (
    <div class="columns-3">
      <Container
        items={leftItems}
        onChange={(id, checked) => onChangeCustom(id, checked, "LEFT")}
        //recieve id checked values of checkbox
      />

      <div>
        <button onClick={() => onClick("LEFT")}>left</button>
        <button onClick={() => onClick("RIGHT")}>right</button>
      </div>

      <Container
        items={rightItems}
        onChange={(id, checked) => onChangeCustom(id, checked, "RIGHT")}
      />
    </div>
  );
};

export default TransferList;

//onchange (passedfunctiontochild) ={ (recieved values fromchild)=> now do anthing}

//jesi hi parent recieved onchange values parent , itpass these passed values to on change custom

//TransferList -> Container(c1) -> Checkbox(c2)

//const Container = ({ items, onChange }) => {
//const Checkbox = ({ title, checked, onChange }) => {

//3.TransferList recieve onChange={(id, checked) => onChangeCustom(id, checked, "RIGHT")}
//2.container recieve    onChange={(checked) => onChange(item.id, checked)}
//1.checkbox me          onChange={(e) => onChange(e.target.checked)}

//child to parent sending values through onchange
