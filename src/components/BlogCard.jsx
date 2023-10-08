import React from "react";
import cover from "../assets/Dummy/dummy-img.png";
import dp from "../assets/Dummy/author-dp.png";

const BlogCard = () => {
  const data = {
    img: { cover },
    blogType: "Blog Type",
    read_time: "11 min read",
    title: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Gorem ipsum dolor sit amet, consectetur adipi scing elit. Nunc vulputate libero et velit inte Gorem ipsum dolor sit amet, consectetur adipi scing elit. Nunc vulputate libero et velit inte",
    author_dp: { dp },
    author_name: "By Rahul Soni",
    author_sign: "By Rahul Soni",
  };

  return (
    <div className="flex flex-col lg:w-[30%] ld:w-[32%] pr:w-full sm:w-full h-auto mb-6 pr:mb-12 sm:mb-12 pr:text-left sm:text-left">
      <img src={cover} alt="img" className="object-cover w-full rounded-2xl" />
      <div className="flex flex-col">
        <div className="flex items-center space-x-3 font-semibold ld:font-medium text-xs pr:text-sm text-[#403F3F] mt-3">
          <h6>{data.blogType}</h6>
          <div className="bg-[#403F3F] h-2 w-2 rounded-full"></div>
          <h6>{data.read_time}</h6>
        </div>
        <div className="mt-2">
          <h1 className="text-2xl ld:text-xl pr:text-3xl font-bold">
            {data.title}
          </h1>
        </div>
        <div className="mt-2 h-16 overflow-hidden overflow-ellipsis">
          <p className="text-sm ld:text-xs pr:text-base overflow-hidden overflow-ellipsis">
            {data.desc}
          </p>
        </div>
        <div className="mt-2 ld:mt-4 flex items-center space-x-2">
          <img src={dp} alt="dp" className="h-10 w-10" />
          <div className="flex flex-col text-xs space-y-1">
            <h6 className="font-semibold">{data.author_name}</h6>
            <h6>{data.author_sign}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
