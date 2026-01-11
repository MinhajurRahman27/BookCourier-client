import React, { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-full flex items-center justify-center flex-col gap-4 transition-all ease-in-out">
      <button
        onClick={toggleTheme}
        className="rounded-full p-2 shadow-purple-400 cursor-pointer  hover:text-primary transition-all ease-in-out dark:bg-white dark:shadow-amber-400 dark:hover:text-amber-400"
      >
        {theme === "light" ? <FaRegMoon /> : <GoSun />}
      </button>
    </div>
  );
};

export default Theme;
