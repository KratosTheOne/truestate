import logo from "../assets/Icons/Logo.svg";
import call from "../assets/Icons/Call.svg";
import mail from "../assets/Icons/Mail.svg";
import instagram from "../assets/Icons/skill-icons_instagram.svg";
import facebook from "../assets/Icons/logos_facebook.svg";
import youtube from "../assets/Icons/logos_youtube-icon.svg";

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
    <div className="lg:mt-32 sm:mt-20 bg-white">
      <div className="flex sm:flex-col justify-between content-center max-w-[84rem] mx-auto py-6 px-5">
        <div className="flex flex-col space-y-8 items-start">
          <img src={logo} alt="logo" className="h-7" />
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <img src={call} alt="call" className="h-6 w-6 mr-1" />
              <a
                href={`tel:${phoneNumber}`}
                className="text-gray-400 font-medium"
                onClick={handlePhoneClick}
              >
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img src={mail} alt="mail" className="h-6 w-6 mr-1" />
              <a
                href={`mailto:${emailAddress}`}
                className="text-gray-400 font-medium"
                onClick={handleEmailClick}
              >
                {emailAddress}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 sm:mt-8">
          <h1 className="text-xl font-bold">Follow Us</h1>
          <div className="flex space-x-6">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
      </div>
      <div className="max-w-[84rem] mx-auto px-5">
        <hr className="h-[0.10rem] bg-gray-400 mt-8"></hr>
      </div>
      <div className="flex justify-center text-center mt-8 text-sm">
        <h5 className="mb-8 font-semibold">
          &copy; Iqol Technologies Pvt. Ltd.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
