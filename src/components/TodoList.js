import React, { useState } from "react";
import icon from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  clearCompletedTodos,
  deleteTodo,
  markCompleted,
} from "../reduxStore/todoSlice";

function TodoList() {
  const [checked, setChecked] = useState("");

  const todoItems = useSelector((state) => state.todo.todos);
  const completed = useSelector(state => state.completed )
  const dispatch = useDispatch();

  // const handleCheck = (e) => {
  //   dispatch(markCompleted(e))
  //   setChecked(e);
  //   console.log(checked)
  // };

  return (
    <div
      className="
        font-bodyFont  absolute top-[33%] left-[50%] translate-x-[-50%]
      "
    >
      <div className="flex flex-col rounded-[5px]  bg-white max-h-[300px] dark:bg-desaturatedBlue">
        <ul className=" grid grid-cols-1 w-[310px] lg:w-[550px] scrollbar-hide overflow-y-scroll">
          {todoItems.map((item) => (
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 120 },
              }}
              key={item.id}
              className={`${
                checked ? "line-through text-gray-400 dark:text-gray-400" : ""
              } todoLi
`}
            >
              <div
                onClick={() => setChecked(!checked)}
                className={`${
                  checked ? "bg-gradient-to-t from-bgFrom to-bgTo" : ""
                } checkImg`}
              >
                {checked ? <img src={check} alt="" /> : null}
              </div>
              {item.title}
              <img
                src={icon}
                alt=""
                className="w-3  absolute right-4 cursor-pointer"
                onClick={() => dispatch(deleteTodo(item.id))}
              />
            </motion.li>
          ))}
        </ul>
        <div
          className=" flex justify-between p-6
         lg:text-sm items-center text-gray-500 h-4 "
        >
          <span>{todoItems.length} items left</span>
          <div className="lg:flex lg:gap-4 hidden ">
            <span className="span">All</span>
            <span className="span">Active</span>
            <span className="span">Completed</span>
          </div>
          <span
            className="span"
            onClick={() => dispatch(clearCompletedTodos())}
          >
            Clear completed
          </span>
        </div>
      </div>
      <div
        className=" flex justify-center gap-4 items-center text-gray-500
         lg:hidden  h-4 bg-white dark:bg-desaturatedBlue p-6 mt-5 rounded-[4px]"
      >
        <span className="span">All</span>
        <span className="span">Active</span>
        <span className="span">Completed</span>
      </div>

      <div className="text-center mt-6 p-4 text-gray-500">
        Drag and drop to reorder list.
      </div>
    </div>
  );
}

export default TodoList;
