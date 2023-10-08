import React from "react";
import coverImg from "../assets/Images/why to work with us.png";
import arrow from "../assets/Icons/Arrow.svg";

const WhyUs = () => {
  return (
    <div className="flex pr:flex-col-reverse sm:flex-col-reverse max-w-[84rem] mx-auto text-center ld:text-left justify-between px-6 mt-28 pr:mt-20 sm:mt-20">
      <div className="lg:w-[50%] ld:w-[45%] pr:w-full">
        <img
          src={coverImg}
          alt="whyUs"
          className="object-cover lg:w-[90%] ld:w-full pr:w-full"
        />
      </div>
      <div className="flex flex-col lg:w-[50%] ld:w-[45%] lg:text-left lg:pl-20">
        <div className="flex flex-col ld:space-y-4 space-y-6 mt-6">
          <h4 className="text-xl font-bold text-[#B620F0] tracking-widest">
            BENEFITS
          </h4>
          <h2 className="text-3xl lg:font-bold ld:font-bold pr:font-extrabold sm:font-bold">
            Why Work With Us
          </h2>
        </div>
        <div className="flex flex-col ld:mt-8 mt-10 space-y-8 ld:space-y-6 pr:mt-12 sm:mb-20 pr:mb-14">
          <div className="flex">
            <div className="h-8 w-8">
              <img src={arrow} alt="arrow" className="h-full w-full" />
            </div>
            <div className="flex flex-col text-left ml-6 ld:ml-4">
              <h3 className="text-xl ld:text-xl ld:font-bold lg:font-bold pr:font-bold sm:font-bold">
                We work for you
              </h3>
              <p className="text-base ld:text-sm ld:text mt-3 ld:mt-2 break-words ld:leading-relaxed">
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
            <div className="flex flex-col text-left ml-6 ld:ml-4">
              <h3 className="text-xl lg:font-bold sm:font-bold pr:font-bold ld:text-xl ld:font-bold ">
                Best price guarantee
              </h3>
              <p className="text-base mt-3 break-words ld:leading-relaxed ld:mt-2">
                We work directly with land owners - no brokers or agents in
                between. We refund the difference if you find a better price.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="h-8 w-8">
              <img src={arrow} alt="arrow" className="h-full w-full" />
            </div>
            <div className="flex flex-col text-left ml-6 ld:ml-4">
              <h3 className="text-xl lg:font-bold sm:font-bold pr:font-bold ld:text-xl ld:font-bold">
                End-to-end support
              </h3>
              <p className="text-base mt-3 break-words ld:leading-relaxed ld:mt-2">
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
