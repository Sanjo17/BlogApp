/* eslint-disable react/prop-types */
import logo from "../assets/images/blog.jpg";
export const Comment = ({ data }) => {
  return (
    <div className="comment  flex p-4 border border-gray-200 rounded-md shadow-sm ">
      <div className="logo w-10 h-10 ">
        <img src={logo} alt="" width={20} className="rounded-full" />
      </div>
      <div className="user px-5">
        <h1>{data?.user}</h1>
        <span className="break-words">{data?.comment}</span>
      </div>
    </div>
  );
};
