import React from "react";
import num1 from "../assets/Icons/num1.svg";
import num2 from "../assets/Icons/num2.svg";
import num3 from "../assets/Icons/num3.svg";
import num4 from "../assets/Icons/num4.svg";
import num5 from "../assets/Icons/num5.svg";
import processImg from "../assets/Images/How it.png";

const Process = () => {
  return (
    <div className="bg-gradient-to-r from-[#650B89] to-[#C953F8] h-full text-white sm:mt-10">
      <div className="lg:flex sm:flex sm:flex-col items-center justify-between max-w-[84rem] mx-auto px-6 py-16">
        <div className="flex flex-col lg:w-[50%]">
          <div className="flex flex-col lg:space-y-6 sm:space-y-4">
            <h4 className="lg:text-lg font-medium">PROCESS</h4>
            <h2 className="lg:text-3xl sm:text-2xl font-semibold">
              How It Works
            </h2>
          </div>
          <div className="flex flex-col lg:space-y-4 sm:space-y-2 lg:mt-10 sm:mt-6">
            <div className="flex lg:space-x-6 sm:space-x-3">
              <img src={num1} alt="num1" className="sm:h-14" />
              <div className="flex flex-col text-left ">
                <h3 className="lg:text-xl font-medium">Informing</h3>
                <p className="text-base lg:mt-3">
                  Tell us more about your dream home.
                </p>
              </div>
            </div>
            <div className="flex lg:space-x-6 sm:space-x-3">
              <img src={num2} alt="num1" className="sm:h-14" />
              <div className="flex flex-col text-left ">
                <h3 className="lg:text-xl font-medium">Understanding</h3>
                <p className="text-base lg:mt-3">
                  Get a free 30 minute session with our in-house advisor.{" "}
                </p>
              </div>
            </div>
            <div className="flex lg:space-x-6 sm:space-x-3">
              <img src={num3} alt="num1" className="sm:h-14" />
              <div className="flex flex-col text-left ">
                <h3 className="lg:text-xl font-medium">Get Personal Expert</h3>
                <p className="text-base lg:mt-3">
                  Sign up and get a dedicated expert agent assigned.{" "}
                </p>
              </div>
            </div>
            <div className="flex lg:space-x-6 sm:space-x-3">
              <img src={num4} alt="num1" className="sm:h-14" />
              <div className="flex flex-col text-left ">
                <h3 className="lg:text-xl font-medium">Get Touring</h3>
                <p className="text-base lg:mt-3">
                  Find your plot with our expert agent’s assistance.{" "}
                </p>
              </div>
            </div>
            <div className="flex lg:space-x-6 sm:space-x-3">
              <img src={num5} alt="num1" className="sm:h-14" />
              <div className="flex flex-col text-left ">
                <h3 className="lg:text-xl font-medium">Finalize the Deal</h3>
                <p className="text-base lg:mt-3">
                  Seal the deal - we’ll help with the paperwork.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] h-full flex justify-end sm:mt-8">
          <img src={processImg} alt="process" className="object-cover w-full" />
        </div>
      </div>
    </div>
  );
};

export default Process;
