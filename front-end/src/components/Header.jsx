import { useNavigate } from "react-router-dom";
// import logo from "../assets/images/blog.jpg";
import { IoMdHome } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";


export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header flex flex-row  justify-between align-middle bg-green-300 p-2 ">
      <div className="nav-left  flex align-middle justify-center">
        <h1 className="font-bold text-2xl font-sans">BlogApp</h1>
      </div>
     
      <div className="nav-right flex flex-row  justify-evenly gap-1.5 items-center ">
        <div className="nav-home-item flex justify-center align-middle " onClick={() => navigate("/home")}>
          <IoMdHome size={20}/> 
          <span className="hidden sm:block md:block lg:block">Home</span>
        </div>
        <div className="nav-home-item flex  " onClick={() => navigate("/dashboard")}>
          <RiDashboardFill size={20}/>
          <span className="hidden sm:block md:block lg:block">Dashboard</span>
        </div>
        <div className="nav-home-item flex  " onClick={() => navigate("/login")}>
        <TbLogout2 size={20}/> 
          <span className="hidden sm:block md:block lg:block">logout</span>
        </div>

      </div>
    </div>
  );
};
