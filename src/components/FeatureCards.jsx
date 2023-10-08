const FeatureCards = ({ icon, title, description }) => {
  return (
    <div className="lg:w-72 ld:w-[46%] pr:w-[48%] sm:w-[46%] lg:h-64 ld:h-64 pr:h-64 sm:h-64 mb-10 ">
      <div className="sm:flex pr:flex sm:justify-center pr:justify-center">
        <img src={icon} alt="icon" className="" />
      </div>
      <div className="mt-6 sm:flex sm:justify-center pr:flex pr:justify-center">
        <h2 className="flex lg:text-left text-xl font-bold">{title}</h2>
      </div>
      <div className="mt-4 sm:flex sm:justify-center pr:flex pr:justify-center pr:px-10">
        <p className="flex lg:text-left flex-wrap">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCards;
