import React from "react";
import arrow_right from "../assets/Icons/arrow-right.svg";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router";

const BlogContainer = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/blogs");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col max-w-[84rem] mx-auto sm:text-center pr:text-center justify-between px-6 mt-20 pr:mt-20 sm:mt-16">
      <div className="flex flex-col ld:space-y-4 space-y-6">
        <h3 className="text-xl font-bold text-[#B620F0] tracking-widest">
          GOOD READ
        </h3>
        <h1 className="text-3xl ld:text-4xl ld:font-bold pr:text-4xl lg:font-extrabold pr:font-bold sm:font-bold">
          Blogs
        </h1>
      </div>
      <div className="flex flex-col pr:flex-col-reverse sm:flex-col-reverse justify-between ld:mt-1 mt-4 pr:mt-10 sm:mt-10 h-full">
        <div
          onClick={handleViewAllClick}
          className="flex lg:mb-6 ld:mb-8 justify-end pr:justify-center sm:justify-center cursor-pointer pr:mt-4"
        >
          <h4 className="text-[#F54C1E] font-semibold pr:text-lg text-sm">
            View All
          </h4>
          <img
            src={arrow_right}
            alt="arrow-right"
            className="h-5 w-5 pr:h-7 pr:w-7 ml-2"
          />
        </div>
        <div className="flex sm:flex-col pr:flex-col justify-between">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
