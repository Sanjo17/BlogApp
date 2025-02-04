import { Content } from "../../components/Content";
import { SearchBar } from "../../components/SearchBar";



export const Home = () => {
  return (
   
      <div className="home">
        <div className="search-box text-center  flex justify-center items-center mt-10">
          <SearchBar />
        </div>  
        <Content />
      </div>
   
  );
};