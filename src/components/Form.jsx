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
    // Check if the message is not empty and does not exceed 200 characters
    if (message.trim() !== "" && message.length <= 200) {
      // Save the user details in Firebase
      database.ref("userDetails").push({
        fullName,
        number,
        message,
      });

      // Clear the form fields
      setFormData({
        fullName: "",
        number: "",
        message: "",
      });
    } else {
      // Handle the case where the message is empty or exceeds the character limit
      alert("Please enter a message with a maximum of 200 characters.");
    }
  };

  return (
    <div className="flex max-w-[84rem] mx-auto items-center justify-between px-6 mt-32">
      <div className="bg-[#FFEAE4] flex sm:flex-col lg:justify-between lg:items-center lg:text-left sm:text-center px-20 sm:px-6 relative w-full rounded-3xl h-full py-8">
        <div className="lg:w-[50%] flex flex-col text-2xl font-bold lg:py-24 sm:mb-6">
          <h2>Get Started with Free</h2>
          <h2>Consultations!</h2>
        </div>
        <div className="lg:h-40 lg:border lg:border-gray-500 lg:ml-20 lg:mr-36"></div>
        <div className="lg:w-[50%] sm:text-left sm:px-6">
          <form>
            <div className="flex flex-col">
              <h5 className="text-left text-lg font-medium mb-2">Full Name</h5>
              <input
                className="w-full bg-transparent border border-gray-500 rounded-md mb-6 py-2 px-3"
                type="text"
                placeholder="Enter your Full Name"
                id="fullName"
                required
                value={fullName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-left text-lg font-medium mb-2">
                Contact Number
              </h5>
              <input
                className="w-full bg-transparent border border-gray-500 rounded-md mb-6 py-2 px-3"
                type="text"
                placeholder="Enter your Contact Number"
                id="number"
                required
                value={number}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-left text-lg font-medium mb-2">Message</h5>
              <textarea
                className="w-full bg-transparent border border-gray-500 rounded-md mb-6 py-2 px-3"
                placeholder="Enter Message (Max 200 characters)"
                id="message"
                value={message}
                onChange={handleChange}
                maxLength="200"
              />
            </div>
            <div>
              <button
                type="button"
                onClick={onSubmit}
                className="bg-[#F54C1E] lg:px-6 lg:py-2 sm:py-3 lg:rounded-md sm:rounded-lg text-white lg:text-sm sm:text-base font-semibold sm:w-full sm:tracking-wider"
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
