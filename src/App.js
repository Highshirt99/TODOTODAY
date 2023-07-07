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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const updateTheme = () => {
      const now = new Date();
      const hours = now.getHours();

      if (hours >= 6 && hours < 18) {
        setIsDarkMode(false);
        setIcon('sun');
      } else {
        setIsDarkMode(true);
        setIcon('moon');
      }
    };

    updateTheme();    // Initial theme update

    const timer = setInterval(updateTheme, 60000);   // Update theme 

    return () => {
      clearInterval(timer); // Cleanup timer on unmount
    };
  }, []);

  return (
    <div className={` min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative">
        <div className="lg:hidden mdl:hidden md:hidden sm:hidden flex justify-center w-screen object-cover">
          <img width="100%" src={isDarkMode? bgMobileDark : bgMobile} alt="" />
        </div>
        <div className="hidden mdl:block sm:block md:block lg:block  w-screen object-cover">
          <img src={isDarkMode ? bgDesktopDark : bgDesktop} alt=""/>
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

        
          <div>
            {icon === 'sun' ? (
              <img src={iconDark} alt="Moon Icon" className="w-7 h-7 lg:w-10 lg:h-10" />
            ) : (
              <img src={iconLight} alt="Sun Icon" className=" w-7 h-7 lg:w-10 lg:h-10" />
            )}
          </div>


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