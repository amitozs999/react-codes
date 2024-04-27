const Post = ({ post }) => {
  return (
    <a href={post?.url} target="__blank" style={{ textDecoration: "none" }}>
      <div>
        <p>
          ID: <span>{post?.id}</span>{" "}
        </p>
        <h1>{post?.title}</h1>

        <p>
          Posted by: <span>{post?.by}</span>{" "}
        </p>
      </div>
    </a>
  );
};

export default Post;
