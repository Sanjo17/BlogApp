/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BlogForm } from "./BlogForm";
import { BlogContext } from "../context/BlogContext";

export const Post = () => {
  const [postData, setPostData] = useState({});
  const { id, edit } = useParams();
  const [editForm, setEditForm] = useState(false);
  const { blogList, setBlogList } = useContext(BlogContext);

  const navigate = useNavigate();

  useEffect(() => {
    const filteredData = blogList.filter((v) => v.id == id);
    if (filteredData.length == 0) {
      setPostData({
        id: "",
        title: "",
        content: "",
        author: "",
      });
    }
    console.log(postData);
    setPostData(filteredData[0]);
  }, [blogList]);
  const closeForm = () => {
    setEditForm(!editForm);
  };
  const handleDelete = () => {
    navigate(-1);

    setBlogList(blogList.filter((v) => v.id != postData.id));
  };
  const handleEdit = () => {
    setEditForm(!editForm);
  };

  return (
    <>
      {edit === "true" ? (
        <div className="actions flex justify-end gap-1 mt-1">
          <div className="border p-1 bg-blue-400 flex" onClick={handleEdit}>
            <MdEdit size={20} />
            edit
          </div>
          <div className="border p-1 bg-red-500 flex" onClick={handleDelete}>
            <MdDelete size={20} />
            delete
          </div>
        </div>
      ) : (
        ""
      )}
      {postData ? (
        <div className="post   pt-1 px-5 sm:px-5 pt-10 md:px-10 pt-10 lg:px-7  ">
          <h1 className="blog-post-title text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
            {postData.title}
          </h1>
          <cite className="blog-post-author mt-2 text-lg text-gray-600 ">
            Blog by : {postData.author}
          </cite>
          <p className="blog-post-content text-lg my-5">{postData.content}</p>
          <div className="likes bg-red-100 w-fit">100 likes</div>
        </div>
      ) : (
        "no data"
      )}
      {editForm ? (
        <BlogForm data={postData} handleCreate={closeForm} edit={true} />
      ) : (
        ""
      )}
    </>
  );
};
