import { useEffect, useState } from "react";
import "./postListRendering.css";
export default function PostListRendering() {
  const [posts, setPosts] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      {posts ? (
        <ul>
          {posts.map((post) => {
            return (
              <li>
                <h4>id: {post.id}</h4>
                <h2>title : {post.title}</h2>
                <p>{post.body}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
