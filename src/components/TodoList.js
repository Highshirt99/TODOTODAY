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
          className=" grid grid-cols-1 w-[350px] lg:w-[600px]
               md:w-[600px] sm:w-[600px] xmd:w-[450px] scrollbar-hide overflow-y-scroll"
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
              <span className="scrollbar-hide text-[25px] max-w-[250px] xmd:max-w-[350px] sm:max-w-[470px] lg:max-w-[500px] md:max-w-[500px] overflow-y-scroll">{item.title}</span>
              <span className="dark:text-lightGrayishBlue text-desaturatedBlue  absolute bottom-1 left-[3.8rem] text-[10px]">
                Created: {item.created_at}
              </span>
              {item.completed_at && (
                <span className="dark:text-lightGrayishBlue text-desaturatedBlue  absolute bottom-1 lg:right-20 right-10 text-[10px]">
                  Completed: {item.completed_at}
                </span>
              )}
              <img
                src={icon}
                alt=""
                className="absolute w-3 cursor-pointer right-4"
                onClick={() => dispatch(deleteTodo(item.id))}
              />
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center justify-between h-4 p-6 text-gray-500 lg:text-sm">
          <span>{activeTodoItems.length} items left</span>
          <div className="hidden lg:flex lg:gap-4 ">
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

      <div className="p-4 mt-10 text-center text-gray-500">
        Drag and drop to reorder list.
      </div>
    </div>
  );
}

export default TodoList;
