import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import background from "../assets/background.png";
import crown from "../assets/crown.png";
import light from "../assets/light.png";
import layer from "../assets/layer.png";
import sis from "../assets/sis.png";
import circooles from "../assets/circooles.png";
import catalog from "../assets/catalog.png";
import quotient from "../assets/quotient.png";
import accept from "../assets/accept.svg";
import icon1 from "../assets/icon1.png";
import make from "../assets/make.svg";
import icon2 from "../assets/icon2.png";
import detailed from "../assets/detailed.svg";
import icon3 from "../assets/icon3.png";
import get from "../assets/get.svg";
import icon4 from "../assets/icon4.png";
import arrow from "../assets/arrow.png";
import background02 from "../assets/background02.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import background3 from "../assets/background3.png";
import flag from "../assets/flag.png";
import paper from "../assets/paper.png";
import quote1 from "../assets/quote1.png";
import quote2 from "../assets/quote2.png";
import tv from "../assets/tv.png";
import flash from "../assets/flash.png";
import flash2 from "../assets/flash2.png";
import arrow02 from "../assets/arrow02.png";
import layer2 from "../assets/layer2.png";
import light2 from "../assets/light2.png";
import driver from "../assets/driver.png";
import link from "../assets/link.png";
import moneys from "../assets/moneys.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import star from "../assets/star.png";
import card from "../assets/card.png";
import background5 from "../assets/background5.png";
import pci from "../assets/pci.png";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-blue-50 py-[58px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] lg:grid grid-cols-2 items-center">
        <m.div
          initial={{ opacity: 1, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            x: { duration: 1 },
          }}
          className="flex lg:hidden"
        >
          <img className="mx-auto mb-[28px]" src={background} />
        </m.div>
        <div className="relative">
          <m.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              x: { duration: 1 },
            }}
            className="absolute -top-[30px] -left-[10px] hidden lg:flex"
          >
            <img src={crown} />
          </m.div>
          <div>
            <m.h4
              initial={{ opacity: 1, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                x: { duration: 1 },
              }}
              className="md:text-[35px] text-[30px] xl:text-[40px] font-semibold text-center lg:text-start leading-10"
            >
              Join the Revolution of
            </m.h4>
            <m.h4
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                x: { duration: 1 },
              }}
              className="md:text-[35px] text-[30px] xl:text-[40px] font-semibold text-primary  text-center lg:text-start leading-10"
            >
              Seamless Transactions
            </m.h4>
            <m.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                x: { duration: 1 },
              }}
              className="flex justify-center lg:justify-start"
            >
              <h4 className="md:text-[35px] text-[30px] xl:text-[40px] font-semibold  mr-[10px] leading-10">
                with
              </h4>
              <h4 className="md:text-[35px] text-[30px] xl:text-[40px] font-semibold  text-primary leading-10">
                AlliancePay
              </h4>
            </m.div>
          </div>
          <m.h4
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              x: { duration: 1 },
            }}
            className="mt-[24px] text-[12px] md:text-[16px] text-center lg:text-start"
          >
            {/* We’ve been told it is not possible to overachieve our customers’
            expectations. We have not reinvented the wheel, we decided to build
            upon it. */}
            Alliancepay simplifies payments one merchant at a time.
          </m.h4>
          <div className="flex lg:mt-[44px] mt-[17px] justify-center lg:justify-start">
            <Link to="/">
              <m.button
                initial={{ opacity: 1, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  x: { duration: 1 },
                }}
                className="rounded-[30px] bg-primary hover:bg-blue-800  text-white md:px-[18px] md:py-[12px] px-[12px] py-[8px] md:mr-[32px] mr-[15px]  text-[12px] sm:text-[16px]"
              >
                Get Started
              </m.button>
            </Link>

            <m.div
              initial={{ opacity: 1, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                x: { duration: 1 },
              }}
              className="flex items-center"
            >
              <div className="bg-blue-300 flex items-center md:w-[32px] md:h-[32px] w-[25px] h-[25px] justify-center rounded-full mr-[16px]">
                <img className="w-[20px] h-[20px]" src={light} />
              </div>
              <a
                href="mailto:info@alliancepay.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="font-semibold text-[12px] sm:text-[14px] text-center w-[120px] sm:w-auto">
                  Contact Sales
                </h4>
              </a>
            </m.div>
          </div>
        </div>
        <m.div
          initial={{ opacity: 1, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            x: { duration: 1 },
          }}
          className="hidden lg:flex"
        >
          <img src={background} />
        </m.div>
      </div>
    </div>
  );
};

export default Dashboard;
