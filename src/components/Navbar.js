import React, { useState } from "react";
import logo from "../assets/logo.png";
import next from "../assets/next.png";
import down from "../assets/down.png";
import burger from "../assets/burger.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

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
            Why alliancepay
          </h4>

          <div className=" flex items-center px-[16px]">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
              Resources
            </h4>
            <div>
              <img src={down} />
            </div>
          </div>
          <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] px-[16px]">
            Contact us
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
        <div className="xl:hidden">
          <img onClick={() => setShow(!show)} src={burger} />
        </div>
      </div>

      <div
        className={`top-0 left-0 z-40 absolute bg-white w-full lg:px-[70px] px-[15px] md:px-[30px] ${
          show ? "translate-y-0" : "-translate-y-full"
        } ease-in-out duration-700`}
      >
        <div className="bg-white lg:py-[16px] py-[20px] flex justify-between items-center xl:hidden">
          <div>
            <img src={logo} />
          </div>
          <div>
            <img onClick={() => setShow(!show)} src={burger} />
          </div>
        </div>
        <div>
          <div className=" xl:hidden">
            <div className=" flex items-center lg:px-[16px]">
              <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
                Demo
              </h4>
              <div>
                <img src={down} />
              </div>
            </div>
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px]">
              Why alliancepay
            </h4>

            <div className=" flex items-center lg:px-[16px]">
              <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] ">
                Resources
              </h4>
              <div>
                <img src={down} />
              </div>
            </div>
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px]">
              Contact us
            </h4>
          </div>
          <div className=" lg:hidden items-center">
            <h4 className="lg:mr-[44px] text-[12px] md:text-[16px] lg:text-[16px] font-medium">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
