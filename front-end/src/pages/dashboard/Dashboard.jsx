import { useState } from "react";
import { BlogForm } from "../../components/BlogForm";
import { Content } from "../../components/Content";
import { SearchBar } from "../../components/SearchBar";
import { BlogProvider } from "../../context/BlogContext";
import { SeachProvider } from "../../context/SearchContext";

export const Dashboard = () => {
  const [formOpen, setFormOpen] = useState(false);

  const handleCreate = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="dashboard">
      <BlogProvider>
        <SeachProvider>
          <div className="dashboard-box ">
            <div className="search-box text-center  flex justify-center items-center mt-10">
              <SearchBar />
            </div>
            <div className="create justify-end flex mx-10">
              <button
                className="border p-2 bg-blue-700 text-white rounded"
                onClick={handleCreate}
              >
                + Create
              </button>
            </div>
            {formOpen ? <BlogForm edit={false} handleCreate={handleCreate}/> : ""}
            <Content  />
          </div>
        </SeachProvider>
      </BlogProvider>
    </div>
  );
};
