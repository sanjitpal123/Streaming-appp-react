import { useState, useEffect } from "react";
import SearchIcon from "../../assets/Search.png";



function SearchBar() {
 

  return (
    <div className="w-full flex flex-col items-center relative">
      {/* Search bar container */}
      <div className="w-[90%] md:w-[60%] lg:w-[50%] h-[45px] flex items-center bg-white border border-gray-300 rounded-full shadow-lg p-1">
        <input
          type="text"
          className="h-full w-full px-4 text-gray-800 text-sm md:text-base outline-none rounded-l-full"
          placeholder="Search YouTube..."
        
        />
        <button className="h-full px-4 flex items-center justify-center rounded-r-full bg-gray-100 hover:bg-gray-200 transition duration-200">
          <img src={SearchIcon} className="h-[65%]" alt="Search" />
        </button>
      </div>


    

 

  

    </div>
  );
}

export default SearchBar;
