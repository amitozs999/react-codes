import axios from "axios";
import Post from "./Post";

import { useState } from "react";

import { useEffect } from "react";

const JobFeed = () => {
  const HACKERNEWS_POSTID_API = `https://hacker-news.firebaseio.com/v0/jobstories.json`;
  const [posts, setPosts] = useState([]); //array of postobjdetails
  const [pageNumber, setPageNumber] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [jobIds, setJobIds] = useState([]);
  const [endReached, setEndReached] = useState(false);

  useEffect(() => {
    fetchAllJobIds();
  }, [pageNumber]); //jese hi page no change fetchjob ids again for nextpage

  const fetchAllJobIds = async () => {
    // if (!endReached) {

    const response = await axios.get(HACKERNEWS_POSTID_API); //gives all post ids
    //array.splice(index, howmany)  spliced for currpage ke only
    const newpostIds = response.data.splice(pageNumber * perPage, perPage); //skip jitni a chuki, show new perpage
    console.log(newpostIds);

    //   if (posts.length >= response.data.length) {
    //     //all response wali post alreay in stored posts
    //     setEndReached(true);
    //   }
    fetchAllMetadata(newpostIds); //now fetch post data for these newposts
    // }
  };

  const fetchAllMetadata = (newpostIds) => {
    newpostIds.forEach((newpostId) => {
      axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${newpostId}.json`)
        .then((res) => {
          setPosts((posts) => [...posts, res.data]); //add new postid  ka obj in posts array of obj
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div>
      <h1>Hackernews Jobs</h1>

      {/* show all posts from array  */}
      <div>
        {posts.map((singlePost, idx) => (
          <Post key={singlePost?.id} post={singlePost} />
        ))}
      </div>

      {
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => setPageNumber(pageNumber + 1)}>
            Load More
          </button>
        </div>
      }
    </div>
  );
};

export default JobFeed;
