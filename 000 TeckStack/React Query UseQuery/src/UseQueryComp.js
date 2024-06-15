import { useQuery } from "@tanstack/react-query";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const UseQueryComp = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["postData"],
    queryFn: getPosts,
    staleTime: 5000,
    cacheTime: 10000,
  });

  if (isPending) {
    return (
      <h1 className="text-3xl text-center my-8 font-bold text-gray-400">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-3xl text-center my-8 font-bold text-gray-400">
        Error: {error.message}
      </h1>
    );
  }

  return (
    <div className="m-4 max-w-[600px] w-4/5 mx-auto">
      {data &&
        data.map((post) => {
          return (
            <div style={{ background: "blue" }}>
              <h2 className="font-bold text-lg mb-2 text-gray-400">
                {post.title}
              </h2>
              <p className="text-gray-400">{post.body}</p>
            </div>
          );
        })}
    </div>
  );
};
export default UseQueryComp;
