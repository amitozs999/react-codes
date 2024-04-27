import { items } from "./itemlist";
import { useState } from "react";

const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(0); //idx of item jo set he

  const prevbuttonclicked = () => {
    if (currentItem === 0) {
      setCurrentItem(items.length - 1);
    } else {
      setCurrentItem(currentItem - 1);
    }
  };
  const nextbuttonclicked = () => {
    if (currentItem === items.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem((c) => c + 1);
    }
  };
  return (
    <div>
      <div className="carousel-item">
        <img
          height="200"
          width="200"
          src={items[currentItem].imageUrl}
          alt={items[currentItem].title}
        />
        <h2>{items[currentItem].title}</h2>
        <p>{items[currentItem].description}</p>
      </div>

      <button onClick={prevbuttonclicked}> Prev </button>
      <button onClick={nextbuttonclicked}> Next </button>
    </div>
  );
};

export default Carousel;
