import React from "react";
import { useDarkMood } from "../Provider/ThemeContext";


const DarkMoodToggler = () => {
  const{darkMood, setDarkMood}=useDarkMood()
  return (
    <button onClick={()=>setDarkMood(!darkMood)} className="px-3 py-2 bg-gray-200 rounded-full transition-all dark:bg-white/10 cursor-pointer">
      {darkMood ? " 𖤓" : "⏾"}
    </button>
  );
};

export default DarkMoodToggler;