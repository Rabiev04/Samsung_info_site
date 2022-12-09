import { useState } from "react";
import { useEffect } from "react";

export default function PostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((data) => data.json())
      .then((response) => {
        setPosts(response);
        console.log(response);
      });
  }, []);

  return (
    <div className="post_box">
      {posts.map((item) => {
        return (
          <div className="post_lists" key={item.id}>
            <div className="post_list">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}
