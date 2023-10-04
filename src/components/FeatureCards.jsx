const FeatureCards = ({ icon, title, description }) => {
  return (
    <div className="lg:w-72 sm:w-[50%] lg:h-64 sm:72 mb-10">
      <div className="sm:flex sm:justify-center">
        <img src={icon} alt="icon" className="" />
      </div>
      <div className="mt-6 sm:flex sm:justify-center">
        <h2 className="flex lg:text-left text-xl font-bold">{title}</h2>
      </div>
      <div className="mt-4 sm:flex sm:justify-center">
        <p className="flex lg:text-left flex-wrap">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCards;
