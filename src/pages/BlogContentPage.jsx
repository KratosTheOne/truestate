import React from "react";
import BlogContent from "../components/BlogContent";
import Footer from "../components/Footer";

const BlogContentPage = () => {
  return (
    <div className="overflow-hidden bg-[#F9F9FA]">
      <div className="h-full mb-20">
        <BlogContent />
      </div>
      <div className="h-full">
        <Footer />
      </div>
    </div>
  );
};

export default BlogContentPage;
