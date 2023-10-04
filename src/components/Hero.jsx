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
    <div className="lg:flex max-w-[84rem] mx-auto text-center justify-between px-6 mt-12">
      <div className="mt-8 lg:w-[50%]">
        <div className="flex flex-col lg:text-left sm:text-center space-y-2">
          <h1 className="lg:text-6xl sm:text-3xl font-bold break-words lg:leading-snug">
            Find And Buy <br /> Land To Build Your{" "}
            <span className="text-[#F54C1E]">Dream Home</span>
          </h1>
        </div>
        <div className="flex lg:text-left sm:justify-center mt-4">
          <h4 className="lg:text-lg sm:text-base lg:font-medium sm:font-normal">
            Tru.Estate helps you discover and purchase <br /> residential plots
            with 100% trust
          </h4>
        </div>
        <div className="flex lg:items-start sm:items-center sm:justify-center mt-6">
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
      <div className="flex lg:w-[50%] lg:justify-end sm:mt-10">
        <img
          className="lg:h-[520px] relative"
          alt="headerImg"
          src={headerImg}
        />
      </div>
    </div>
  );
};

export default Hero;
