import React from "react";
import cover from "../assets/Dummy/dummy-img.png";
import dp from "../assets/Dummy/author-dp.png";

const BlogContentPage = () => {
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
    <div className="w-full flex flex-col">
      <div className="flex flex-col max-w-[84rem] mx-auto text-left justify-between px-6">
        <div className="flex flex-col">
          <h4 className="text-[#403F3F] text-xs font-semibold">Home / Blogs</h4>
          <div className="bg-[#E4E4E4] w-full h-[.125rem] mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogContentPage;
