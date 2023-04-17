import React, { useState } from "react";
import logo from "../assets/logo.svg";
import next from "../assets/next.png";
import down from "../assets/down.png";
import burger from "../assets/burger.png";
import cancel from "../assets/cancel.png";
import { Link } from "react-router-dom";

const Navbar = ({ show, setShow }) => {
  return (
    <div className="xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
      <div className=" bg-white lg:py-[16px] py-[20px] flex justify-between items-center ">
        <div>
          <img src={logo} />
        </div>
        <div className="xl:flex hidden">
          <div className=" flex items-center px-[16px]">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
              Demo
            </h4>
            <div>
              <img src={down} />
            </div>
          </div>
          <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] px-[16px]">
            <Link to="/about">About Us</Link>
          </h4>

          <div className=" flex items-center px-[16px]">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
              <Link to="/documentation">Documentation</Link>
            </h4>
          </div>
          <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] px-[16px]">
            <Link to="/contact_us">Contact Us</Link>
          </h4>
        </div>
        <div className="xl:flex hidden items-center">
          <h4 className="mr-[44px] text-[12px] md:text-[16px] lg:text-[16px] font-medium">
            Log in
          </h4>
          <button className="bg-primary flex items-center px-[24px] py-[11px] rounded-[30px]">
            <h4 className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[20px] ">
              Sign up{" "}
            </h4>
            <div>
              <img src={next} />
            </div>
          </button>
        </div>
        <div className="xl:hidden hover:cursor-pointer">
          <img onClick={() => setShow(!show)} src={burger} />
        </div>
      </div>

      <div
        className={`top-0 left-0 z-40 absolute bg-white w-full h-screen lg:px-[70px] px-[15px] md:px-[30px] xl:hidden ${
          show ? "translate-y-0" : "-translate-y-[1300px]"
        } ease-in-out duration-500`}
      >
        <div className="bg-white lg:py-[16px] py-[20px] flex justify-between items-center xl:hidden">
          <div className="invisible">
            <img src={logo} />
          </div>
          <div className="hover:cursor-pointer">
            <img onClick={() => setShow(!show)} src={cancel} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" xl:hidden">
            <div className="  lg:px-[16px] h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
              >
                Demo
              </h4>
            </div>
            <div className="h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center hover:cursor-pointer"
              >
                <Link to="/about">About Us</Link>
              </h4>
            </div>

            <div className="  lg:px-[16px] h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
              >
                <Link to="/documentation">Documentation</Link>
              </h4>
            </div>
            <div className="h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center  hover:cursor-pointer"
              >
                <Link to="/contact_us">Contact Us</Link>
              </h4>
            </div>
            <div className="h-[70px] min-h-fit">
              <h4
                onClick={() => setShow(!show)}
                className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center  hover:cursor-pointer"
              >
                Log in
              </h4>
            </div>

            <div className="flex justify-center">
              <div className="h-[70px] min-h-fit ">
                <button
                  onClick={() => setShow(!show)}
                  className="bg-primary hover:bg-blue-800 justify-center flex items-center px-[24px] py-[11px] rounded-[30px]"
                >
                  <h4 className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[20px] ">
                    Sign up{" "}
                  </h4>
                  <div>
                    <img src={next} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
