/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext();

export const SeachProvider = ({children}) => {

    const [search, setSearch] = useState("");
    return(
        <SearchContext.Provider value={{search,setSearch}}>
            {children}
        </SearchContext.Provider>
    );
}

