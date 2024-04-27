import { useState } from "react";

export default function Tabs({ defaultValue, items }) {
  const [tabvalue, setValue] = useState(defaultValue ?? items[0]);

  //main div contains vert
  //1.tablist          tablist contains (tabtn1 tabtn2 tabtn3) horiozntally
  //2.content

  //main div => display: flex; flex-direction: column;
  //tablist  => display: flex; flex-direction: row;
  return (
    <div className="maindiv">
      {/* //list of tabbuttons */}
      <div className="tabs-list">
        {items.map((citemvalue) => {
          const isActiveValue = citemvalue.label === tabvalue.label;

          return (
            <button
              key={citemvalue}
              type="button"
              //use array of class name filter false wali out true wali have string , then join it
              className={[
                "tabs-list-item",
                isActiveValue && "tabs-list-item--active", //if active then use active blue class
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => {
                setValue(citemvalue);
              }}
            >
              {citemvalue.label}
            </button>
          );
        })}
      </div>

      {/* //show selected content  */}
      {/* //selected tabbutton ka content  */}

      <div>
        {items.map((citemvalue) => (
          //show only tabvalue of only which are in tabvalue usestate
          //hidden true for non selected tab
          <div key={citemvalue} hidden={citemvalue !== tabvalue}>
            {citemvalue.content}
          </div>
        ))}
      </div>
    </div>
  );
}
