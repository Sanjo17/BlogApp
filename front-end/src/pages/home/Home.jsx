import { Content } from "../../components/Content";
import { SearchBar } from "../../components/SearchBar";
import { BlogProvider } from "../../context/BlogContext";
import { SeachProvider } from "../../context/SearchContext";



export const Home = () => {
  return (
    <BlogProvider>
    <SeachProvider>
      <div className="home">
        <div className="search-box text-center  flex justify-center items-center mt-10">
          <SearchBar />
        </div>  
        <Content />
      </div>
    </SeachProvider>
    </BlogProvider>
  );
};