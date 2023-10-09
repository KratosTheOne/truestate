import React from "react";
import logo from "../assets/Icons/Logo.svg";
import call from "../assets/Icons/Call.svg";
import call_orange from "../assets/Icons/call_orange.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const phoneNumber = "+918420566770";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-white shadow-md h-14 top-0 z-20 sticky">
      <div className="flex max-w-[84rem] mx-auto text-center justify-between h-full px-6">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="h-6 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <a
          href={`tel:${phoneNumber}`}
          className="text-sm font-bold cursor-pointer flex items-center justify-center"
          onClick={handlePhoneClick}
        >
          <div className="flex text-center items-center justify-between space-x-2">
            <div className="hidden lg:flex items-center">
              <img
                src={call}
                alt="call"
                className="h-5 w-5 cursor-pointer lg:mr-1"
                onClick={handlePhoneClick}
              />

              {phoneNumber}
            </div>

            <div className="lg:hidden">
              <div className="flex items-center border border-[#F54C1E] rounded-md px-3 py-2">
                <div
                  className="h-4 w-4 mr-2 cursor-pointer"
                  onClick={handlePhoneClick}
                >
                  <img src={call_orange} alt="call" className="h-full w-full" />
                </div>
                <span className="text-sm font-semibold cursor-pointer text-[#F54C1E]">
                  Call Us
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
