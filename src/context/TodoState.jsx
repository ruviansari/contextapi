import React, { useState } from "react";

import TodoContext from "./TodoContext";
import { flushSync } from "react-dom";
const TodoState = (props) => {
  const [arr, setarr] = useState([
    {
      id: 1,
      task: "HTML study",
      Status: "incompleted",
    },
    {
      id: 2,
      task: "CSS study",
      Status: "incompleted",
    },

    {
      id: 3,
      task: "JS study",
      Status: "completed",
    },
  ]);

  function addItem() {

  }

  function removeItem(ans) {
    console.log(ans);
    let filterArr = arr.filter((ele) => ele.id !== ans.id);
    console.log(filterArr);
    setarr(filterArr);
  }

  function updateItem(obj, i){
    console.log(obj)
    console.log(i)
    if(obj.status==='completed'){
      obj.status = 'incompleted'
    }
    else{
      obj.status = 'completed'
    }
    console.log(obj);
    let copyArr = [...arr]
    copyAA[i]=obj;
    setarr(copyArr)
  }

  return (
    <TodoContext.Provider value={{ arr, addItem, removeItem, updateItem }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
