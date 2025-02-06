import { useContext, useRef, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { BlogContext } from "../context/BlogContext";

export const SearchBar = () => {
  const [cancelbtn, setCancelBtn] = useState(false);
  const { setSearch } = useContext(SearchContext);
  const { resetBlog } = useContext(BlogContext);
  const searchRef = useRef();
  const handleSearch = () => {
    if(searchRef.current.value!=""){
    setSearch(searchRef.current.value);
    setCancelBtn(!cancelbtn);
    }
  };

  const handleReset = () => {
    setSearch("")
    resetBlog();
    searchRef.current.value = "";
    setCancelBtn(!cancelbtn);
  };
  return (
    <div className="searchbar   relative inline-block">
      <input
        type="text"
        ref={searchRef}
        placeholder="search blog"
        className="sm:w-sm lg:w-lg md:w-md border rounded-lg p-2 pr-10"
      />
      {cancelbtn ? <button onClick={handleReset} className="absolute right-17 top-1  -translate-y-0.5 border px-2 py-1 bg-gray-200 text-gray-700 rounded cursor-pointer  ">X</button> : null}

      <button
        className="absolute right-0 top-1  -translate-y-0.5 bg-green-700 text-white px-3 py-1 rounded "
        onClick={handleSearch}
      >
        search
      </button>
    </div>
  );
};
