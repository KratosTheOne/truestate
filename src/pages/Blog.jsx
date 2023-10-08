import React from "react";
import AllBlogs from "../components/AllBlogs";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="overflow-hidden  bg-[#F9F9FA]">
      <div className="h-full mb-20">
        <AllBlogs />
      </div>
      <div className="h-full">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
