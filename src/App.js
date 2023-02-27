import bgMobile from "./images/bg-mobile-light.jpg";
import bgMobileDark from "./images/bg-mobile-dark.jpg";
import bgDesktop from "./images/bg-desktop-light.jpg";
import bgDesktopDark from "./images/bg-desktop-dark.jpg";
import iconLight from "./images/icon-moon.svg";
import iconDark from "./images/icon-sun.svg";
import "./App.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);
  return (
    <div className=" bg-veryLightGrayishBlue dark:bg-darkBlue min-h-screen">
      <div className="relative">
        <div className="lg:hidden mdl:hidden md:hidden sm:hidden flex justify-center w-screen object-cover">
          <img src={darkTheme ? bgMobileDark : bgMobile} alt="" />
        </div>
        <div className="hidden mdl:block sm:block md:block lg:block  w-screen object-cover">
          <img src={darkTheme ? bgDesktopDark : bgDesktop} alt=""/>
        </div>

        <div
          className="lg:w-[600px]  absolute top-[20%] left-0 right-0 flex justify-between lg:left-1/2  lg:translate-x-[-50%]
        lg:translate-y-[-50%] xmd:left-4 xmd:right-4 mdl:right-8 mdl:left-8
         px-6"
        >
          <h1
            className=" text-white font-bodyFont tracking-[0.8rem]
          text-base text-[1.5rem] lg:text-[2rem] sm:text-[1.4rem] md:text-[1.4rem]
          font-bold
          "
          >
            TODO
          </h1>

          <img
            src={darkTheme ? iconDark : iconLight}
            alt=""
            onClick={changeTheme}
            className="w-[20px] h-full object-cover lg:w-[35px] md:w-[30px] sm:w-[30px] cursor-pointer"
          />
        </div>
        <InputForm />
     
      </div>
      <div >
          <TodoList />
        </div>
    </div>
  );
}

export default App;
