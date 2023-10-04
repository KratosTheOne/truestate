import React from "react";
import coverImg from "../assets/Images/why to work with us.png";
import arrow from "../assets/Icons/Arrow.svg";

const WhyUs = () => {
  return (
    <div className="flex sm:flex-col max-w-[84rem] mx-auto text-center justify-between px-6 mt-32">
      <div className="lg:w-[50%]">
        <img src={coverImg} alt="whyUs" className="object-cover lg:w-[90%]" />
      </div>
      <div className="flex flex-col lg:w-[50%] lg:text-left lg:pl-20">
        <div className="flex flex-col space-y-6 mt-6">
          <h4 className="text-lg font-medium text-[#F54C1E] tracking-widest">
            BENEFITS
          </h4>
          <h2 className="text-3xl lg:font-semibold sm:font-bold">
            Why Work With Us
          </h2>
        </div>
        <div className="flex flex-col mt-10 space-y-8">
          <div className="flex">
            <div className="h-8 w-8">
              <img src={arrow} alt="arrow" className="h-full w-full" />
            </div>
            <div className="flex flex-col text-left ml-6">
              <h3 className="text-xl lg:font-medium sm:font-bold">
                We work for you
              </h3>
              <p className="text-base mt-3 break-words">
                Unlike traditional brokers who only sell you what they have in
                their inventory, we give you expert advice on plots across
                Bengaluru
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="h-8 w-8">
              <img src={arrow} alt="arrow" className="h-full w-full" />
            </div>
            <div className="flex flex-col text-left ml-6">
              <h3 className="text-xl lg:font-medium sm:font-bold">
                Best price guarantee
              </h3>
              <p className="text-base mt-3 break-words">
                We work directly with land owners - no brokers or agents in
                between. We refund the difference if you find a better price.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="h-8 w-8">
              <img src={arrow} alt="arrow" className="h-full w-full" />
            </div>
            <div className="flex flex-col text-left ml-6">
              <h3 className="text-xl lg:font-medium sm:font-bold">
                End-to-end support
              </h3>
              <p className="text-base mt-3 break-words">
                Our expert agents guide you through the entire process - from
                selecting a plot to due diligence to completing the
                documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
