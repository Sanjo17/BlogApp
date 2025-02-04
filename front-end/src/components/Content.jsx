import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import { Pagination } from "./Pagination";
import { BlogContext } from "../context/BlogContext";
import { SearchContext } from "../context/SearchContext";

// import { searchContext } from "../context/context";

export const Content = () => {
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const { blogList, setBlogList } = useContext(BlogContext);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    if (search != "") {
      const copyList = blogList.filter((v) => {
        if (v.title.toLowerCase().includes(search)) {
          return true;
        }
      });
      setBlogList(copyList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="content flex flex-col mx-10">
      <div className=" flex flex-wrap gap-5 p-16 justify-center">
        {currentBlogs.length > 0
          ? currentBlogs.map((post) => {
              return <Card data={post} key={post.id} />;
            })
          : "no blogs"}
      </div>

      <Pagination data={{ currentBlogs, setCurrentBlogs }} />
    </div>
  );
};
