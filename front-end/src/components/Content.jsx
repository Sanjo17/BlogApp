import { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import { Pagination } from "./Pagination";
import { BlogContext } from "../context/BlogContext";
import { SearchContext } from "../context/SearchContext";

export const Content = () => {
  const { blogList, setBlogList } = useContext(BlogContext);
  const [data, setData] = useState("data");
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    if (search != "") {
      console.log("content search reloafd");
      const copyList = blogList.filter((v) => {
        if (v.title.toLowerCase().includes(search)) {
          return true;
        }
      });
      setBlogList(copyList);
    }
  }, [search]);

  const callbackFn = (data) => {
    setData(data);
  };

  return (
    <div className="content flex flex-col mx-10">
      <div className=" flex flex-wrap gap-5 p-16 justify-center">
        {currentBlogs?.length > 0
          ? currentBlogs.map((post) => {
              return (
                <Card
                  data={post}
                  key={post.id}
                  sampleData={data}
                  callbackFn={callbackFn}
                />
              );
            })
          : "no blogs"}
      </div>

      <Pagination data={{ currentBlogs, setCurrentBlogs }} />
    </div>
  );
};
