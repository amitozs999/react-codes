import React, { useState, useEffect } from "react";
import View from "./View";
//get reposnse in this comp
//and set to view comp to set it

//fetch currpage ka reposnse first

const InfiniteScroll = () => {
  const [response, setResponse] = useState([]);
  const [currpageno, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const { scrollTop, scrollHeight } = document.documentElement;

  //  adding parameters in url dynamically
  //   new URLSearchParams({
  //     _limit: 9,
  //     _page: currpageno,
  //   })
  const getData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?` +
        new URLSearchParams({
          _limit: 9,
          _page: currpageno,
        })
    );
    const data = await res.json();
    setResponse((oldData) => [...oldData, ...data]);
    setLoading(false);
  };

  //gives new response when currpageno changes
  useEffect(() => {
    getData();
  }, [currpageno]);

  //window.innerHeight property returns the height of a window's content area

  //scrolltop kitna scrolled
  //scrollHeight property returns the height of an element including padding, but excluding borders, scrollbars, or margins.

  //check if condition satisfy update currpageno no
  const handleInfiniteScroll = async () => {
    //innerht+doctop(kitna scrolled) >= scrollht   sab screen wala seen ho chuka new ad karo

    if (scrollTop + window.innerHeight + 2 >= scrollHeight) {
      setLoading(true);
      setPage((prevpg) => prevpg + 1);
    }
  };

  //call function to update currpageno no when  eveer scroll happend on listers
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
      <View response={response} />
      {loading && <div className="loading"> </div>}
    </>
  );
};
export default InfiniteScroll;
