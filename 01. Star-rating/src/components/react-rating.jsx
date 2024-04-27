import { useState } from "react";

import React from "react";

const StarRating = (props) => {
  let lim = props.limit || 5;
  const [rat, setrat] = useState(props.rating || 2); //rating number (3 star)

  console.log(lim);
  console.log(rat);

  const handlestars = (e) => {
    console.log(+e.target.getAttribute("data"));

    setrat(e.target.getAttribute("data"));
  };

  return (
    <div onClick={handlestars}>
      {[...new Array(lim).keys()].map((idx) => (
        //each sapn ko assign star no
        <span
          key={idx}
          data={idx + 1} //0 idx se start 2 key means 3 rating
          className={idx < rat ? "star-rated" : "star"} //check rating val if want to show fill or not
        ></span>
      ))}
    </div>
  );
};
export default StarRating;
