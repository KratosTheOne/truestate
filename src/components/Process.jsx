import React from "react";
import num1 from "../assets/Icons/1.svg";
import num2 from "../assets/Icons/2.svg";
import num3 from "../assets/Icons/3.svg";
import num4 from "../assets/Icons/4.svg";
import num5 from "../assets/Icons/5.svg";
import processImg from "../assets/Images/How it.png";

const Process = () => {
  return (
    <div className="bg-gradient-to-r from-[#650B89] to-[#C953F8] h-full text-white ld:mt-12 sm:mt-2">
      <div className="lg:flex ld:flex sm:flex sm:flex-col pr:flex pr:flex-col pr:items-start items-center ld:items-start justify-between max-w-[84rem] mx-auto px-6 py-16 sm:items-start">
        <div className="flex flex-col lg:w-[50%] ld:w-[50%]">
          <div className="flex flex-col lg:space-y-6 ld:space-y-6 pr:space-y-4 sm:space-y-4">
            <h4 className="lg:text-xl ld:text-xl pr:text-xl pr:font-semibold  ld:font-semibold font-semibold sm:font-semibold">
              PROCESS
            </h4>
            <h2 className="lg:text-4xl ld:text-3xl pr:text-3xl sm:text-2xl font-semibold ld:font-bold">
              How It Works
            </h2>
          </div>
          <div className="flex flex-col lg:space-y-4 sm:space-y-2 ld:space-y-3 lg:mt-10 ld:mt-8 pr:mt-8 sm:mt-6">
            <div className="flex lg:space-x-6 ld:space-x-2 pr:space-x-4 sm:space-x-3 items-start">
              <img src={num1} alt="num1" className="sm:h-14 ld:h-16" />
              <div className="flex flex-col lg:space-y-3 text-left ld:space-y-1 pr:space-y-2 pr:mt-1 justify-center lg:mt-1 sm:space-y-1">
                <h3 className="lg:text-xl ld:text-lg ld:font-semibold pr:text-lg pr:font-semibold font-medium sm:text-base sm:font-semibold">
                  Informing
                </h3>
                <p className="text-base ld:text-sm sm:text-xs">
                  Tell us more about your dream home.
                </p>
              </div>
            </div>
            <div className="flex lg:space-x-6 ld:space-x-2 sm:space-x-3 pr:space-x-4 items-start">
              <img src={num2} alt="num1" className="sm:h-14 ld:h-16" />
              <div className="flex flex-col text-left space-y-3 ld:space-y-1 justify-center lg:mt-1 pr:space-y-2 pr:mt-1 sm:space-y-1">
                <h3 className="lg:text-xl font-medium pr:text-lg pr:font-semibold ld:text-lg ld:font-semibold sm:text-base sm:font-semibold">
                  Understanding
                </h3>
                <p className="text-base ld:text-sm sm:text-xs">
                  Get a free 30 minute session with our in-house advisor.{" "}
                </p>
              </div>
            </div>
            <div className="flex lg:space-x-6 ld:space-x-2 sm:space-x-3 pr:space-x-4 items-start">
              <img src={num3} alt="num1" className="sm:h-14 ld:h-16" />
              <div className="flex flex-col text-left space-y-3 ld:space-y-1 justify-center lg:mt-1 pr:space-y-2 pr:mt-1 sm:space-y-1">
                <h3 className="lg:text-xl font-medium pr:text-lg pr:font-semibold ld:text-lg ld:font-semibold sm:text-base sm:font-semibold">
                  Get Personal Expert
                </h3>
                <p className="text-base ld:text-sm sm:text-xs">
                  Sign up and get a dedicated expert agent assigned.{" "}
                </p>
              </div>
            </div>
            <div className="flex lg:space-x-6 ld:space-x-2 sm:space-x-3 pr:space-x-4 items-start">
              <img src={num4} alt="num1" className="sm:h-14 ld:h-16" />
              <div className="flex flex-col text-left space-y-3 ld:space-y-1 justify-center lg:mt-1 pr:space-y-2 pr:mt-1 sm:space-y-1">
                <h3 className="lg:text-xl font-medium pr:text-lg pr:font-semibold ld:text-lg ld:font-semibold sm:text-base sm:font-semibold">
                  Get Touring
                </h3>
                <p className="text-base  ld:text-sm sm:text-xs">
                  Find your plot with our expert agent’s assistance.{" "}
                </p>
              </div>
            </div>
            <div className="flex lg:space-x-6 ld:space-x-2 sm:space-x-3 pr:space-x-4 items-start">
              <img src={num5} alt="num1" className="sm:h-14 ld:h-16" />
              <div className="flex flex-col text-left space-y-3 ld:space-y-1 justify-center lg:mt-1 pr:space-y-2 pr:mt-1 sm:space-y-1">
                <h3 className="lg:text-xl font-medium pr:text-lg pr:font-semibold ld:text-lg ld:font-semibold sm:text-base sm:font-semibold">
                  Finalize the Deal
                </h3>
                <p className="text-base ld:text-sm sm:text-xs">
                  Seal the deal - we’ll help with the paperwork.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] ld:w-[45%] pr:w-full h-full flex justify-end pr:mt-10 sm:mt-8">
          <img src={processImg} alt="process" className="object-cover w-full" />
        </div>
      </div>
    </div>
  );
};

export default Process;
