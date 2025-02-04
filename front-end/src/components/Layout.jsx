import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";
import { BlogProvider } from "../context/BlogContext";
import { SeachProvider } from "../context/SearchContext";



export const Layout = () => {
  return <>
   <BlogProvider>
   <SeachProvider>
    <Header/>
    <Outlet/>
    <Footer/>
    </SeachProvider>
    </BlogProvider>
  </>;
};
