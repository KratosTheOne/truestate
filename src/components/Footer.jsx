import logo from "../assets/Icons/Logo.svg";
import call from "../assets/Icons/Call.svg";
import mail from "../assets/Icons/Mail.svg";
import instagram from "../assets/Icons/skill-icons_instagram.svg";
import linkedin from "../assets/Icons/LinkedIn.svg";
import x_logo from "../assets/Icons//Twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const phoneNumber = "+918420566770";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const emailAddress = "contact@truestate.in";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="lg:mt-32 sm:mt-16 bg-white">
      <div className="flex sm:flex-col justify-between content-center max-w-[84rem] mx-auto py-6 px-5">
        <div className="flex flex-col space-y-8 items-start">
          <img src={logo} alt="logo" className="h-7" />
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <img src={call} alt="call" className="h-6 w-6 mr-1" />
              <a
                href={`tel:${phoneNumber}`}
                className="text-black font-medium"
                onClick={handlePhoneClick}
              >
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img src={mail} alt="mail" className="h-6 w-6 mr-1" />
              <a
                href={`mailto:${emailAddress}`}
                className="text-black font-medium"
                onClick={handleEmailClick}
              >
                {emailAddress}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 sm:mt-8">
          <h1 className="text-xl font-bold">Follow Us</h1>
          <div className="flex space-x-6 items-center justify-center sm:justify-start">
            <Link to="https://www.instagram.com/truestateindia">
              <img
                src={instagram}
                alt="instagram"
                height="32px"
                width="32px"
                className="cursor-pointer"
              />
            </Link>
            <Link to="https://www.linkedin.com/company/truestateindia">
              <img
                src={linkedin}
                alt="linkedin"
                height="32px"
                width="32px"
                className="cursor-pointer"
              />
            </Link>
            <Link to="https://twitter.com/truestateindia">
              <img
                src={x_logo}
                alt="x_logo"
                height="32px"
                width="32px"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[84rem] mx-auto px-5">
        <hr className="h-[0.10rem] bg-gray-400 mt-8"></hr>
      </div>
      <div className="flex justify-center text-center mt-4 text-sm">
        <h5 className="mb-4 font-semibold">
          &copy; Iqol Technologies Pvt. Ltd.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
