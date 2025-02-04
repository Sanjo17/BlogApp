/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BlogContext } from "../context/BlogContext";
import { BlogForm } from "./BlogForm";

export const Card = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  const [isDash, setDash] = useState(false);
  const { blogList, setBlogList } = useContext(BlogContext);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setDash(!isDash);
    } 
  }, []);

  const navigate = useNavigate();
  const handleEdit = () => {
    setEditMode(!editMode);
  };
  const closeForm = () => {
    setEditMode(!editMode);
  };
  const handleDelete = () => {
    setBlogList(blogList.filter((v) => v.id !== data.id));
  };
  return (
    <>
      <div className="card  p-1 w-sm h-60 border rounded-sm shadow-md overflow-hidden hover:shadow-lg transition bg-blue-100 flex flex-col justify-between">
        <div
          className="card-details"
          onClick={() => navigate(`/postdetails/${data.id}/${isDash}`)}
        >
          <h2 className="blog-title text-xl font-semibold text-gray-900 break-words line-clamp-2 ">
            {data.title}
          </h2>
          <cite className="blog-author text-sm text-gray-500">
            {data.author}
          </cite>
          <p className="blog-content mt-2 text-gray-700 break-words line-clamp-4">
            {data.content}
          </p>
          <span>read more...</span>
        </div>
        {isDash ? (
          <div className="actions  flex justify-end gap-1 align-bottom ">
            <MdEdit size={20} onClick={handleEdit} />
            <MdDelete size={20} onClick={handleDelete} />
          </div>
        ) : (
          ""
        )}
      </div>
      {editMode ? <BlogForm edit={true} handleCreate={closeForm} data={data} /> : ""}
    </>
  );
};
