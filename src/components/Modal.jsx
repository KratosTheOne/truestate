import React, { useState } from "react";
import { database } from "../firebase";

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Check if the message is not empty and does not exceed 200 characters
    if (message.trim() !== "" && message.length <= 200) {
      // Save the user details in Firebase
      database.ref("userDetails").push({
        fullName: name,
        number: phoneNumber,
        message: message,
      });

      // Clear the form fields
      setName("");
      setPhoneNumber("");
      setMessage("");

      onClose();
    } else {
      // Handle the case where the message is empty or exceeds the character limit
      alert("Please enter a message with a maximum of 200 characters.");
    }
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay bg-black opacity-50 fixed inset-0"></div>
        <div className="modal-container bg-white rounded-xl w-[26rem] h-[30rem] p-6 z-50">
          <div className="flex justify-end">
            <span
              className="modal-close cursor-pointer text-xl"
              onClick={onClose}
            >
              &times;
            </span>
          </div>
          <div className="modal-header flex justify-center mb-6">
            <h2 className="flex text-2xl font-semibold text-center items-center">
              Enter Details
            </h2>
          </div>
          <div className="modal-body flex flex-col space-y-6 text-left">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="text-base font-medium">
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Enter Full Name"
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border border-gray-500 rounded-md mb-6 py-2 px-3 text-sm mt-1"
              />
              <label htmlFor="phoneNumber" className="text-base font-medium">
                Contact Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                placeholder="Enter Contact Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full bg-transparent border border-gray-500 rounded-md mb-6 py-2 px-3 text-sm mt-1"
              />
              <label htmlFor="message" className="text-base font-medium">
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                placeholder="Enter Message (Max 200 characters)"
                onChange={(e) => setMessage(e.target.value)}
                maxLength="200"
                className="w-full bg-transparent border border-gray-500 rounded-md mb-6 py-2 px-3 text-sm mt-1"
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#F54C1E] text-white text-lg font-medium rounded-2xl px-12 py-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
