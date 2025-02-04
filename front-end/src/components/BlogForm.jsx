/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import { BlogContext } from "../context/BlogContext";

export const BlogForm = ({
  handleCreate,
  data = { title: "", content: "" },
  edit,
}) => {
  useEffect(() => {
    title.current.value = data.title;
    content.current.value = data.content;
  }, []);

  const [editMode] = useState(edit);
  const { blogList, setBlogList } = useContext(BlogContext);

  const handleEdit = () => {
    const updatedBlogData = {
      id: data.id,
      title: title.current.value,
      content: content.current.value,
    };
    const updatedBlogList = blogList.map((v) => {
      if (v.id === data.id) {
        return updatedBlogData;
      } else {
        return v;
      }
    });
    console.log(updatedBlogData);

    setBlogList(updatedBlogList);
    handleCreate();
  };
  const handleSubmit = () => {
    const nextId = blogList[blogList.length - 1].id + 1;
    const newBlog = {
      id: data.id == null || undefined ? nextId : data.id,
      title: title.current.value,
      content: content.current.value,
    };
    console.log(newBlog);
    setBlogList([...blogList, newBlog]);
    handleCreate();
  };
  const title = useRef();
  const content = useRef();
  return (
    <div className="fixed top-10 right-5 left-5 lg:top-20 lg:right-50 lg:left-50 rounded-2xl bottom-20 border border-green-950 bg-green-50 px-10 py-5  ">
      <div className="close  flex justify-end mb-1">
        <button
          onClick={handleCreate}
          className="border rounded bg-red-300 px-2 "
        >
          X
        </button>
      </div>
      <div className="blog-form   flex flex-col  items-center z-100 h-full  pb-5">
        <input type="text" placeholder="title" className="w-full" ref={title} />
        <textarea
          name="content"
          id=" "
          className="w-full border rounded-2xl h-full p-5"
          placeholder="content"
          ref={content}
        ></textarea>
        <button
          className="border rounded p-1 w-16 mt-2 bg-green-500"
          onClick={editMode ? handleEdit : handleSubmit}
        >
          {editMode ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
};
