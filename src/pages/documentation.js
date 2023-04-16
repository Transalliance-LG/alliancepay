import React from "react";

import { Link } from "react-router-dom";

import down2 from "../assets/down2.png";

const documentation = () => {
  return (
    <div>
      <div className="bg-blue-50 py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            Documentation
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  text-center lg:w-[350px] text-gray-600 ">
              All Alliancepay documentation are designed with one goal in mind;
              Simplicity.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            Build Your Own Custom Experiences
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  text-center lg:w-[600px] text-gray-600 ">
              Our API libraries provide developers with the tools they need to
              create custom experiences for their users. With our API libraries,
              developers can access data and functionality from our platform to
              build new applications or integrate with existing ones. By
              leveraging our APIs, developers can create unique user experiences
              that are tailored to their specific needs and requirements.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white  xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] sm:grid sm:grid-cols-3 flex justify-center">
        <div className="flex justify-center px-[10px] sm:px-[0px]">
          <button className=" flex justify-center text-white bg-primary items-center text-[12px] md:text-[16px] font-semibold md:mt-[20px] z-40  rounded-[30px]  md:px-[30px] md:py-[16] px-[6px] py-[4px]">
            Connect Platforms
          </button>
        </div>

        <div className="flex justify-center px-[10px] sm:px-[0px]">
          <button className=" flex justify-center text-primary bg-white items-center text-[12px] md:text-[16px] font-semibold md:mt-[20px] z-40  rounded-[30px]    border-[1px] border-primary md:px-[30px] md:py-[16] px-[6px] py-[4px]">
            Web Hooks
          </button>
        </div>
        <div className="flex justify-center px-[10px] sm:px-[0px]">
          <button className=" flex justify-center text-primary bg-white items-center text-[12px] md:text-[16px] font-semibold md:mt-[20px] z-40  rounded-[30px]    border-[1px] border-primary md:px-[30px] md:py-[16] px-[6px] py-[4px]">
            API Libraries
          </button>
        </div>
      </div>

      <div className="bg-white py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
            Connect Platforms
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px]">
            Introduction
          </h4>
        </div>
        <div className=" border-[1px] border-gray-200 rounded-[5px] mt-[24px]">
          <div className="py-[28px] px-[32px] flex justify-between items-center border-b-[1px] border-gray-300">
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px]">
              Introduction
            </h4>
            <div>
              <img src={down2} />
            </div>
          </div>
          <div className="py-[28px] px-[32px] flex justify-between items-center border-b-[1px] border-gray-300">
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px]">
              Installation
            </h4>
            <div>
              <img src={down2} />
            </div>
          </div>
          <div className="py-[28px] px-[32px] flex justify-between items-center border-b-[1px] border-gray-300">
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px]">
              Get started
            </h4>
            <div>
              <img src={down2} />
            </div>
          </div>
          <div className="py-[28px] px-[32px] flex justify-between items-center ">
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px]">
              Server settings
            </h4>
            <div>
              <img src={down2} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold text-white">
            Request a Feature or Open a Ticket
          </h1>
          <div className="flex justify-center">
            <button className=" flex text-primary bg-white items-center text-[12px] md:text-[16px] font-semibold mt-[43px] z-40 px-[18px] py-[12px] rounded-[30px] mx-[18px] md:px-[30px]">
              <Link to="/contact_us">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default documentation;
