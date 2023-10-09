import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import cover from "../assets/Dummy/dummy-img.png";
import dp from "../assets/Dummy/author-dp.png";
import cover2 from "../assets/Dummy/cover2.png";
import { useNavigate } from "react-router";

const BlogContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const closeOnOverlayClick = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };

    const closeOnEscKeyPress = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("click", closeOnOverlayClick);
      document.addEventListener("keydown", closeOnEscKeyPress);
    }

    return () => {
      document.removeEventListener("click", closeOnOverlayClick);
      document.removeEventListener("keydown", closeOnEscKeyPress);
    };
  }, [isModalOpen]);

  const navigate = useNavigate();

  const data = {
    img: { cover },
    blogType: "Blog Type",
    read_time: "11 min read",
    title: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Gorem ipsum dolor sit amet, consectetur adipi scing elit. Nunc vulputate libero et velit inte Gorem ipsum dolor sit amet, consectetur adipi scing elit. Nunc vulputate libero et velit inte",
    author_dp: { dp },
    author_name: "By Rahul Soni",
    author_sign: "By Rahul Soni",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus",
    content2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus",
  };

  return (
    <div className="flex flex-col max-w-[84rem] mx-auto sm:text-left justify-between px-6 mt-4 pr:mb-20">
      <div className="flex flex-col cursor-pointer">
        <h4 className="text-[#403F3F] text-sm font-medium">
          <span onClick={() => navigate("/")}>Home</span> /{" "}
          <span onClick={() => navigate("/blogs")}>Blogs</span> /{" "}
          <span onClick={() => navigate("/blogs/bcp")}>{data.title}</span>
        </h4>
        <div className="bg-[#E4E4E4] w-full h-[.125rem] mt-3"></div>
      </div>
      <div className="lg:mt-10 ld:mt-10 sm:mt-8 flex pr:flex-col sm:flex-col">
        <div className="w-[70%] pr:w-full sm:w-full flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col w-[95%] pr:w-full sm:w-full h-auto sm:text-left pr:mt-12">
              <img
                src={cover}
                alt="img"
                className="object-cover w-full rounded-2xl"
              />
              <div className="flex flex-col">
                <div className="flex items-center space-x-3 font-semibold sm:font-black text-xs pr:text-base text-[#403F3F] mt-4">
                  <h6>{data.blogType}</h6>
                  <div className="bg-[#403F3F] h-2 w-2 rounded-full"></div>
                  <h6>{data.read_time}</h6>
                </div>
                <div className="mt-1">
                  <h1 className="text-4xl sm:text-2xl font-bold pr:text-3xl leading-normal ld:leading-normal ld:text-3xl">
                    {data.title}
                  </h1>
                </div>
                <div className="flex items-center space-x-2 pr:space-x-4 pr:mt-8 sm:mt-6 ld:mt-8 lg:mt-6">
                  <img src={dp} alt="dp" className="h-12 w-12" />
                  <div className="flex flex-col text-xs space-y-2 pr:text-sm">
                    <h6 className="font-semibold">{data.author_name}</h6>
                    <h6>{data.author_sign}</h6>
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full">
                  <p className="text-lg leading-relaxed text-justify">
                    {data.content1}
                  </p>
                  <div className="mt-8 mb-8 w-full">
                    <img
                      src={cover2}
                      alt="cover"
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-lg leading-relaxed text-justify">
                    {data.content2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] pr:w-full sm:w-full pr:mt-16 sm:mt-14">
          <div className="w-full h-auto bg-[#FBE3DD] rounded-3xl flex flex-col text-center">
            <h1 className="text-2xl pr:text-3xl py-6 px-6 font-semibold pr:px-8 ld:text-xl">
              Waiting for right time? Talk to us it's the right time.
            </h1>
            <div className="flex justify-center mb-8">
              <button
                type="button"
                onClick={openModal}
                className="bg-[#F54C1E] px-10 drop-shadow-[0_8px_8px_rgba(245,76,30,0.65)] py-3 rounded-md text-white text-sm font-medium"
              >
                Yes! I'm interested
              </button>
              <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
