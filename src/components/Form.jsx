import React, { useState } from "react";
import { database } from "../firebase";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    message: "",
  });

  const { fullName, number, message } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = () => {
    if (message.trim() !== "" && message.length <= 200) {
      const numberRegex = /^\d{10}$/;
      if (!numberRegex.test(number)) {
        alert("Contact number must contain 10 digits only.");
        return;
      }

      database.ref("userDetails").push({
        fullName,
        number,
        message,
      });

      setFormData({
        fullName: "",
        number: "",
        message: "",
      });
    } else {
      alert("Please enter a message with a maximum of 200 characters.");
    }
  };

  return (
    <div className="flex max-w-[84rem] mx-auto items-center justify-between px-6 mt-32 pr:mt-20 mb-32 pr:mb-20 sm:mt-10 sm:mb-10">
      <div className="bg-[#FFEAE4] flex pr:flex-col sm:flex-col lg:justify-between ld:justify-between lg:items-center ld:items-center lg:text-left pr:text-center sm:text-center px-20 sm:px-6 relative w-full rounded-3xl h-full py-8">
        <div className="lg:w-[45%] flex flex-col text-3xl ld:text-3xl pr:text-3xl pr:leading-relaxed font-bold lg:py-24 pr:mb-8 sm:mb-6">
          <h2>Get Started with Free</h2>
          <h2>Consultations!</h2>
        </div>
        <div className="lg:h-40 lg:border lg:border-gray-500 lg:ml-20 lg:mr-36 ld:h-40 ld:border ld:border-gray-500 ld:ml-10 ld:mr-20"></div>
        <div className="lg:w-[50%] ld:w-[45%] sm:text-left sm:px-6">
          <form>
            <div className="flex flex-col">
              <h5 className="text-left text-lg font-medium pr:font-semibold mb-2 ld:mb-1">
                Full Name
              </h5>
              <input
                className="w-full bg-white border border-gray-500 rounded-md ld:mb-4 mb-6 py-2 px-3"
                type="text"
                placeholder="Enter your Full Name"
                id="fullName"
                required
                value={fullName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-left text-lg font-medium pr:font-semibold mb-2 ld:mb-1">
                Contact Number
              </h5>
              <input
                className="w-full bg-white border border-gray-500 rounded-md mb-6 py-2 px-3 ld:mb-4"
                type="text"
                placeholder="Enter your Contact Number"
                id="number"
                required
                value={number}
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-left text-lg font-medium pr:font-semibold mb-2 ld:mb-1">
                Message
              </h5>
              <textarea
                className="w-full bg-white border border-gray-500 rounded-md mb-6 py-2 px-3 ld:mb-4"
                placeholder="Enter Message (Max 200 characters)"
                id="message"
                value={message}
                onChange={handleChange}
                maxLength="200"
              />
            </div>
            <div className="ld:mt-2">
              <button
                type="button"
                onClick={onSubmit}
                className="bg-[#F54C1E] lg:px-6 lg:py-2 ld:px-7 ld:py-2 pr:py-3 sm:py-3 lg:rounded-md ld:rounded-lg pr:rounded-xl sm:rounded-lg text-white lg:text-sm sm:text-base font-semibold pr:w-full sm:w-full sm:tracking-wider pr:tracking-wider"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
