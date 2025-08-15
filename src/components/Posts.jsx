import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../features/posts/postsSlice";

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <p>Loading data...</p>;
  }

  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }

  if (!isLoading && !isError && (!Array.isArray(posts) || posts.length === 0)) {
    content = <div>No posts found.</div>;
  }

  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default Posts;
