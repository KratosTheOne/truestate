import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import CallUsBanner from "../components/CallUsBanner";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden bg-[#F9F9FA]">
      <div className="h-full">
        <Hero />
      </div>
      <div className="h-full">
        <Features />
      </div>
      <div className="h-full">
        <Process />
      </div>
      <div className="h-full">
        <WhyUs />
      </div>
      <div className="h-full">
        <CallUsBanner />
      </div>
      <div className="h-full">
        <Form />
      </div>
      <div className="h-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
