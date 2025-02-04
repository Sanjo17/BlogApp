/* eslint-disable react/prop-types */
import { useContext, useEffect, useMemo, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

export const Pagination = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { blogList } = useContext(BlogContext);
  const blogPerPage = 6;

  const pages = useMemo(() => {
    const totalBlogs = blogList.length; 
    return Array.from(
      { length: Math.ceil(totalBlogs / blogPerPage) },
      (_, i) => i + 1
    );
  }, [blogList]);
  useEffect(() => {
    const indexOfLastBlog = currentPage * blogPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
    const currentBlogs = blogList.slice(indexOfFirstBlog, indexOfLastBlog);
    data.setCurrentBlogs(currentBlogs);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage,blogList]);

  const handlePage = (p) => {
    setCurrentPage(p);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };
  return (
    <>
      {pages.length > 0 ? (
        <div className="pagination flex  justify-center gap-1 mb-10">
          <GrFormPrevious
            className="border"
            size={30}
            onClick={handlePrevPage}
          />
          <div className="page-num flex gap-1">
            {pages.map((p, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handlePage(p)}
                  className={
                    currentPage == p ? "bg-green-600 border w-6" : "border w-6"
                  }
                >
                  {p}
                </button>
              );
            })}
          </div>
          <MdNavigateNext
            className="border"
            size={30}
            onClick={handleNextPage}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
