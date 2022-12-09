import { useState } from "react";

export default function AddPage() {
  const [arrayOfPost, setArrayOfPost] = useState([]);
  const [post, setPost] = useState({
    nameOfPost: "",
    description: "",
    date: "",
    hashtag: "",
  });

  if (!JSON.parse(localStorage.getItem("array"))) {
    localStorage.setItem("array", JSON.stringify(arrayOfPost));
  }

  const onChangeData = (key) => (e) => {
    setPost({ ...post, [key]: e.target.value });
  };
  console.log(post);
  const onClickAddData = () => {
    setArrayOfPost([...arrayOfPost, post]);
    if (!JSON.parse(localStorage.getItem("array"))) {
      localStorage.setItem("array", JSON.stringify(arrayOfPost));
    } else {
      const data = JSON.parse(localStorage.getItem("array"));
      data.push(post);
      localStorage.setItem("array", JSON.stringify(data));
    }
  };
  console.log(arrayOfPost);

  return (
    <div>
      <div>
        <label>
          Name of Post:
          <input onChange={onChangeData("nameOfPost")}></input>
        </label>
        <label>
          Description:
          <input onChange={onChangeData("description")}></input>
        </label>
        <label>
          Date:
          <input onChange={onChangeData("date")}></input>
        </label>
        <label>
          Hashtag:
          <input onChange={onChangeData("hashtag")}></input>
        </label>
        <button onClick={onClickAddData}>Click!</button>
      </div>
      <div>
        {arrayOfPost.map((item) => {
          return (
            <div>
              <p>{item.nameOfPost}</p>
              <p>{item.description}</p>
              <p>{item.date}</p>
              <p>{item.hashtag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
