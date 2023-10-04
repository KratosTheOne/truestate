import React from "react";
import call from "../assets/Icons/call_white.svg";
import banner from "../assets/Images/call us.png";

const CallUsBanner = () => {
  const phoneNumber = "+918420566770";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-gradient-to-r from-[#650B89] to-[#C953F8] h-full text-white mt-32 relative mb-20">
      <div className="flex justify-between max-w-[84rem] mx-auto px-6 items-stretch relative sm:flex-wrap">
        <div className="flex flex-col justify-center space-y-6 lg:w-[50%] py-16 sm:inline sm:mb-[2rem] ">
          <p className="text-lg font-medium sm:mb-[1rem]">
            Do you own plots of land in or around Bengaluru that you are
            interested in selling?
          </p>
          <div className="flex text-lg font-medium sm:inline">
            <h4 className="sm:inline">Call us at</h4>
            <img
              src={call}
              alt="call"
              className="h-5 w-5 lg:mt-1 ml-3 mr-1 sm:inline"
            />
            <a
              href={`tel:${phoneNumber}`}
              className="cursor-pointer mr-3"
              onClick={handlePhoneClick}
            >
              {phoneNumber}
            </a>
            <h4 className="sm:inline">to get the best price!</h4>
          </div>
        </div>
        <div className="flex relative mt-[-4rem] sm:items-center">
          <img
            src={banner}
            alt="banner"
            height="331px"
            width="366px"
            className="flex lg:justify-end sm:justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default CallUsBanner;
