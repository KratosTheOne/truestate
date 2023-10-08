import FeatureCards from "./FeatureCards";
import Geniune from "../assets/Icons/Genuine Listings.svg";
import Verified from "../assets/Icons/Verified Prices.svg";
import Loans from "../assets/Icons/Pre-approved Loans.svg";
import Expert from "../assets/Icons/Expert Assistance.svg";

const Features = () => {
  return (
    <div className="lg:flex ld:flex max-w-[84rem] mx-auto text-center ld:text-left justify-between px-6 py-3 mt-20 ld:mt-28 pr:mt-16 sm:mt-20">
      <div className="lg:w-[50%] ld:w-[40%]">
        <div className="flex flex-col lg:text-left space-y-2">
          <h3 className="text-[#B620F0] tracking-widest font-bold text-xl">
            UNIQUE FEATURES
          </h3>
        </div>
        <div className="flex flex-col lg:text-left space-y-3 font-bold lg:text-5xl ld:text-3xl pr:text-4xl sm:text-3xl lg:mt-8 ld:mt-5 pr:mt-6 lg:leading-snug ld:leading-normal pr:leading-normal sm:leading-normal sm:mt-4">
          <h2>
            What Sets Us Apart <br />
            And Makes Us <br /> Unique
          </h2>
        </div>
        <div className="pr:hidden sm:hidden flex flex-col lg:text-left text-lg lg:mt-8 ld:mt-5 sm:mt-6">
          <h3>
            We are unique due to innovation, quality commitment, <br /> and
            customer dedication.
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap text-center ld:text-left justify-between lg:w-[50%] ld:w-[50%] pr:mt-10 sm:mt-12">
        <FeatureCards
          icon={Geniune}
          title="Genuine Listings"
          description="Our on-ground team of experts catalog and authenticate details of every listed plot."
        />
        <FeatureCards
          icon={Verified}
          title="Verified Prices"
          description="Get extensive real estate data from to ensure buyers get accurate prices of plots in that area."
        />
        <FeatureCards
          icon={Loans}
          title="Pre-approved Loans"
          description="All plots have their legal documents pre-verified by banks to qualify for home loans."
        />
        <FeatureCards
          icon={Expert}
          title="Expert Assistance"
          description="24x7 support by expert agents who give you details on the latest plots, field visits, and more."
        />
      </div>
    </div>
  );
};

export default Features;
