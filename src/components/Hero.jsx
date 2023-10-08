import { useState } from "react";
import headerImg from "../assets/Images/combined.png";
import Modal from "./Modal";
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="lg:flex ld:flex max-w-[84rem] mx-auto text-center justify-between px-6 mt-12">
      <div className="mt-8 lg:w-[50%] ld:w-[50%]">
        <div className="flex flex-col lg:text-left ld:text-left sm:text-center space-y-2">
          <h1 className="lg:text-6xl ld:text-5xl pr:text-4xl sm:text-3xl font-extrabold break-words lg:leading-snug ld:leading-snug pr:leading-normal sm:leading-normal">
            Find And Buy <br /> Land To Build Your{" "}
            <span className="text-[#F54C1E] font-extrabold">Dream Home</span>
          </h1>
        </div>
        <div className="flex lg:text-left ld:text-left sm:justify-center pr:justify-center mt-4 ld:mt-5">
          <h4 className="lg:text-lg pr:text-lg sm:text-base lg:font-medium pr:font-normal sm:font-normal leading-relaxed">
            Tru.Estate helps you discover and purchase <br /> residential plots
            with 100% trust
          </h4>
        </div>
        <div className="flex lg:items-start ld:items-start pr:items-center sm:items-center pr:justify-center sm:justify-center mt-6 ld:mt-8 pr:mt-10 pr:mb-14">
          <button
            type="button"
            onClick={openModal}
            className="bg-[#F54C1E] px-10 drop-shadow-[0_8px_8px_rgba(245,76,30,0.65)] py-3 rounded-md text-white text-sm font-medium"
          >
            It's free Talk to us
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="flex lg:w-[50%] ld:w-[45%] lg:justify-end pr:justify-center sm:mt-10">
        <img
          className="lg:h-[520px] ld:h-full relative"
          alt="headerImg"
          src={headerImg}
        />
      </div>
    </div>
  );
};

export default Hero;
