import React, { useContext } from "react";

import TodoContext from "../context/TodoContext";

const Home = () => {
  let ctx = useContext(TodoContext);
  console.log(ctx);

  // const handleUpdate = (obj,i) => {
  //   console.log(obj);
  //   console.log(i)
  // };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h1>This is Home page</h1>

      {ctx.arr.map((ele, index) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                backgroundColor: ele.status === "completed" ? "green" : "red",
              }}
            >
              {ele.task}
            </p>

            <p>{ele.status}</p>
            <button onClick={() => ctx.removeItem(ele)}>Delete</button>
            <button onClick={() => ctx.updateItem(ele, index)}>
              update status
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
