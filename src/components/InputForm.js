import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reduxStore/todoSlice";

function InputForm() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(
        addTodo({
          title: task,
          id: Math.random()
        })
      );
    }
  };

  return (
    <div
      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
     flex justify-start gap-4
    items-center bg-white dark:bg-desaturatedBlue lg:h-12  h-4 rounded-[4px]  w-[310px]
     lg:w-[550px]  p-6 sm:w-[450px] md:w-[450px] xmd:w-[350px]

    "
    >
      <div className="w-5 h-5 rounded-[50%] border border-gray-500 "></div>
      <input
        type="text"
        className=" 
        bg-transparent border-none dark:text-white
       placeholder:font-bodyFont outline-none"
        placeholder="Create a new todo."
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default InputForm;
