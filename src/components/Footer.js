import React from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] py-[64px]">
      <div className=" flex lg:hidden mb-[24px]">
        <div>
          <div>
            <img src={logo} />
          </div>
          <h4 className="my-[16px] text-[12px] md:text-[16px] lg:text-[16px] font-normal">
            Revolutionize your payments with our cutting-edge features.
          </h4>
          <div className="grid grid-cols-4 w-[200px]">
            <div>
              <img src={facebook} />
            </div>
            <div>
              <img src={google} />
            </div>
            <div>
              <img src={apple} />
            </div>
            <div>
              <img src={instagram} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="lg:flex grid grid-cols-2 justify-between md:gap-[20px]
      lg:gap-[30px] xl:gap-[40px]"
      >
        <div className="w-[300px] hidden lg:flex">
          <div>
            <div>
              <img src={logo} />
            </div>
            <h4 className="my-[16px] text-[12px] md:text-[16px] lg:text-[16px] font-normal">
              Revolutionize your payments with our cutting-edge features.
            </h4>
            <div className="grid grid-cols-4 w-[200px]">
              <div>
                <img src={facebook} />
              </div>
              <div>
                <img src={google} />
              </div>
              <div>
                <img src={apple} />
              </div>
              <div>
                <img src={instagram} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Products
          </h1>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Features
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Solutions
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Integrations
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Enterprise
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Solutions
          </h4>
        </div>
        <div>
          <h1 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Resources
          </h1>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Partners
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Community
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Developers
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            App
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Blog
          </h4>
        </div>

        <div>
          <h1 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Why Choose Us?
          </h1>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Channels
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Scale
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Watch the Demo
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Our Competition
          </h4>
        </div>
        <div>
          <h1 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Company
          </h1>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            About Us
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            News
          </h4>
        </div>
      </div>
      <h4 className="flex justify-center text-gray-400 mt-[64px] text-[12px] md:text-[16px] lg:text-[16px]">
        © 2023 Alliancepay. All Rights Reserved.
      </h4>
    </div>
  );
};

export default Footer;
