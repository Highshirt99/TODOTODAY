import React, { useState, useEffect } from "react";
import icon from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import {
  changeTodoStatus,
  clearCompletedTodos,
  deleteTodo,
  showActiveTodos,
  showAllTodos,
  showCompletedTodos,
} from "../reduxStore/todoSlice";

function TodoList() {
  const [activeButton, setActiveButton] = useState("");

  const todoItems = useSelector((state) => state.todoItem.todos);
  const activeTodoItems = todoItems.filter((item) => item.status === "active");
  const dispatch = useDispatch();

  useEffect(() => {
    setActiveButton("All");
    dispatch(showAllTodos());
  }, []);

  const handleButtonClick = (e) => {
    setActiveButton(e.target.id);
    if (e.target.id === "All") {
      dispatch(showAllTodos());
    } else if (e.target.id === "Active") {
      dispatch(showActiveTodos());
    } else if (e.target.id === "Completed") {
      dispatch(showCompletedTodos());
    }
  };

  return (
    <div
      className="
        font-bodyFont  absolute top-[33%] left-[50%] translate-x-[-50%]
      "
    >
      <div className="flex flex-col rounded-[5px]  bg-white max-h-[300px] dark:bg-desaturatedBlue">
        <ul
          className=" grid grid-cols-1 w-[310px] lg:w-[550px]
               md:w-[450px] sm:w-[450px] xmd:w-[350px] scrollbar-hide overflow-y-scroll"
        >
          {todoItems.map((item) => (
            <motion.li
              key={item.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 120 },
              }}
              className={`${
                item.status === "completed"
                  ? "line-through text-gray-400 dark:text-gray-400"
                  : ""
              } todoLi
        `}
              draggable
            >
              <div
                className={`${
                  item.status === "completed"
                    ? "bg-gradient-to-t from-bgFrom to-bgTo"
                    : ""
                } checkImg`}
                onClick={() => dispatch(changeTodoStatus(item.id))}
              >
                {item.status === "completed" ? (
                  <img src={check} alt="" />
                ) : null}
              </div>
              <p>{item.title}</p>
              <span className="text-ltvdgb text-sm absolute right-[50px]">
                {item.dateCreated}
              </span>
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
          <span>{activeTodoItems.length} items left</span>
          <div className="lg:flex lg:gap-4 hidden ">
            <span
              className={`span ${
                activeButton === "All" ? "text-brightBlue" : ""
              }`}
              id="All"
              onClick={(e) => handleButtonClick(e)}
            >
              All
            </span>
            <span
              className={`span ${
                activeButton === "Active" ? "text-BrightBlue" : ""
              }`}
              id="Active"
              onClick={(e) => handleButtonClick(e)}
            >
              Active
            </span>
            <span
              className={`span ${
                activeButton === "Completed" ? "text-BrightBlue" : ""
              }`}
              id="Completed"
              onClick={(e) => handleButtonClick(e)}
            >
              Completed
            </span>
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
        <span
          className={`span ${activeButton === "All" ? "text-brightBlue" : ""}`}
          id="All"
          onClick={(e) => handleButtonClick(e)}
        >
          All
        </span>
        <span
          className={`span ${
            activeButton === "Active" ? "text-brightBlue" : ""
          }`}
          id="Active"
          onClick={(e) => handleButtonClick(e)}
        >
          Active
        </span>
        <span
          className={`span ${
            activeButton === "Completed" ? "text-brightBlue" : ""
          }`}
          id="Completed"
          onClick={(e) => handleButtonClick(e)}
        >
          Completed
        </span>
      </div>

      <div className="text-center mt-10 p-4 text-gray-500">
        Drag and drop to reorder list.
      </div>
    </div>
  );
}

export default TodoList;
