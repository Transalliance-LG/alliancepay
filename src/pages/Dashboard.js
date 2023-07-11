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
            We’ve been told it is not possible to overachieve our customers’
            expectations. We have not reinvented the wheel, we decided to build
            upon it.
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
                  new users with contact sales
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

      <div className="xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] py-[40px]">
        <h4 className="mb-[32px] flex justify-center">
          Join the list of companies
        </h4>
        <div className="slider flex whitespace-nowrap">
          <div className=" slide-track items-center">
            <div className="slide">
              <img className="w-[160px]" src={layer2} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={sis} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={circooles} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={catalog} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={quotient} />
            </div>
          </div>
          <div className=" slide-track items-center">
            <div className="slide">
              <img className="w-[160px]" src={layer2} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={sis} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={circooles} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={catalog} />
            </div>
            <div className="slide">
              <img className="w-[160px]" src={quotient} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 py-[64px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div className="flex justify-center mb-[64px]">
          <div className="flex justify-center items-center px-[16px] py-[8px] bg-white rounded-[60px] ">
            <div className="bg-blue-300 flex items-center md:w-[32px] md:h-[32px] w-[25px] h-[25px] justify-center rounded-full mr-[12px]">
              <img className="w-[20px] h-[20px]" src={light} />
            </div>
            <h1 className="md:text-[20px] text-[16px] xl:text-[32px] font-semibold">
              Redefining Product Features
            </h1>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <h4 className="mt-[12px] text-[12px] md:text-[16px] mb-[64px] text-center lg:w-[800px] ">
            Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence on cross-platform
            integration.
          </h4>
        </div> */}

        <div className="sm:grid sm:grid-cols-2 2xl:grid-cols-3 gap-[14px] xl:gap-[25px]">
          <div className="hidden sm:block bg-white lg:px-[32px] px-[13px] lg:py-[35px] py-[15px] lg:rounded-[50px] rounded-[22px] 2xl:col-start-1 2xl:col-end-3 col-start-1 col-end-3">
            <div className="flex items-center">
              <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                <img src={icon1} />
              </div>
              <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                Accept payments
              </h1>
            </div>
            <div className="grid grid-cols-2 lg:gap-[70px] gap-[25px] lg:items-end items-center ">
              <div className="">
                <h4 className="mt-[30px] text-[12px] md:text-[16px]">
                  AlliancePay provides businesses with an easy-to-use payment
                  processing solution; with an API system that integrates
                  seamlessly with literally any online platform. A
                  state-of-the-art infrastructure that enables merchants,
                  irrespective of where they are, to effectively manage their
                  businesses on the go!
                </h4>
                <Link to="/">
                  <button className="bg-white flex text-primary items-center text-[12px] md:text-[16px] font-semibold mt-[28px]">
                    Start now
                    <div className="w-[8px] md:w-[12px] ml-[10px]">
                      <img src={arrow} />
                    </div>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img src={accept} />
              </div>
            </div>
          </div>

          <div className=" sm:hidden bg-white lg:px-[32px] px-[13px] lg:py-[35px] py-[15px] lg:rounded-[50px] rounded-[22px] 2xl:col-start-3 2xl:col-end-4 col-start-1 col-end-2">
            <div className="flex items-center">
              <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                <img src={icon1} />
              </div>
              <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                Accept payments
              </h1>
            </div>
            <div className="flex justify-center mt-[15px] h-[62px] w-[62px] md:w-auto md:h-auto mx-auto">
              <img src={accept} />
            </div>
            <h4 className="mt-[8px] text-[12px] md:text-[16px]">
              AlliancePay provides businesses with an easy-to-use payment
              processing solution; with an API system that integrates seamlessly
              with literally any online platform. A state-of-the-art
              infrastructure that enables merchants, irrespective of where they
              are, to effectively manage their businesses on the go!
            </h4>
            <div className="flex justify-start">
              <Link to="/">
                <button className="bg-white flex  text-primary items-center text-[12px] md:text-[16px] font-semibold mt-[28px]">
                  Start now
                  <div className="w-[8px] md:w-[12px] ml-[10px]">
                    <img src={arrow} />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="  mt-[15px] sm:mt-[0px] bg-white lg:px-[32px] px-[13px] lg:py-[35px] py-[15px] lg:rounded-[50px] rounded-[22px] 2xl:col-start-3 2xl:col-end-4 col-start-1 col-end-2">
            <div className="flex items-center">
              <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                <img src={icon2} />
              </div>
              <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                Multiple Payment Options
              </h1>
            </div>
            <div className="flex justify-center mt-[15px] h-[62px] w-[62px] md:w-auto md:h-auto mx-auto">
              <img src={make} />
            </div>
            <h4 className="mt-[8px] text-[12px] md:text-[16px]">
              AlliancePay offers businesses multiple payment options to make
              payments from customers an extremely easy process! The QR code,
              Bank transfers, Card, Payment Links, USSD, Direct Debit etc are a
              few readily available options for customers to pay from. The
              integrations to ensure that each option functions optimally have
              been seamless and simple!
            </h4>
            <div className="flex justify-start">
              <Link to="/">
                <button className="bg-white flex  text-primary items-center text-[12px] md:text-[16px] font-semibold mt-[28px]">
                  Start now
                  <div className="w-[8px] md:w-[12px] ml-[10px]">
                    <img src={arrow} />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-[15px] sm:mt-[0px] bg-white lg:px-[32px] px-[13px] lg:py-[35px] py-[15px] lg:rounded-[50px] rounded-[22px] 2xl:col-start-1 2xl:col-end-2 col-start-2 col-end-3 content-end">
            <div className="flex items-center">
              <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                <img src={icon3} />
              </div>
              <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                Detailed reporting
              </h1>
            </div>
            <div className="flex justify-center mt-[15px] h-[62px] w-[62px] md:w-auto md:h-auto mx-auto">
              <img src={detailed} />
            </div>
            <h4 className="mt-[8px] text-[12px] md:text-[16px]">
              Easy reconciliation of complex data with a click of a button!
              AlliancePay affords you the ability to simplify and export very
              complex data from various transactions and payment patterns of
              multiple customers. The unified data provides very insightful
              reports that will come in very handy to every merchant onboarded!
            </h4>
            <div className="flex justify-start">
              <Link to="/">
                <button className="bg-white flex  text-primary items-center text-[12px] md:text-[16px] font-semibold mt-[28px]">
                  Start now
                  <div className="w-[8px] md:w-[12px] ml-[10px]">
                    <img src={arrow} />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-[15px] sm:mt-[0px] bg-white sm:hidden lg:px-[32px] px-[13px] lg:py-[35px] py-[15px] lg:rounded-[50px] rounded-[22px] 2xl:col-start-1 2xl:col-end-2 col-start-2 col-end-3 content-end">
            <div className="flex items-center">
              <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                <img src={icon4} />
              </div>
              <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                Get true value for your business
              </h1>
            </div>
            <div className="flex justify-center mt-[15px] h-[62px] w-[62px] md:w-auto md:h-auto mx-auto">
              <img src={get} />
            </div>
            <h4 className="mt-[8px] text-[12px] md:text-[16px]">
              Transaction time out? Payment not reflected? Receipt status
              unknown? No problem, we’ve got our AI engine monitoring
              transactitons in realtime. You can login to your business profile
              and confirm status of transaction, resolve disputes etc.
            </h4>
            <div className="flex justify-start">
              <Link to="/">
                <button className="bg-white flex  text-primary items-center text-[12px] md:text-[16px] font-semibold mt-[28px]">
                  Start now
                  <div className="w-[8px] md:w-[12px] ml-[10px]">
                    <img src={arrow} />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden sm:block bg-white lg:px-[32px] px-[13px] lg:py-[35px] py-[15px] lg:rounded-[50px] rounded-[22px]  2xl:col-start-2 2xl:col-end-4 col-start-1 col-end-3">
            <div className="flex items-center">
              <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                <img src={icon4} />
              </div>
              <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                Get true value for your business
              </h1>
            </div>
            <div className="grid grid-cols-2 lg:gap-[70px] gap-[25px] lg:items-end items-center">
              <div className="">
                <h4 className="mt-[30px] text-[12px] md:text-[16px]">
                  Transaction time out? Payment not reflected? Receipt status
                  unknown? No problem, we’ve got our AI engine monitoring
                  transactitons in realtime. You can login to your business
                  profile and confirm status of transaction, resolve disputes
                  etc.
                </h4>
                <Link to="/">
                  <button className="bg-white flex text-primary items-center text-[12px] md:text-[16px] font-semibold mt-[28px]">
                    Start now
                    <div className="w-[8px] md:w-[12px] ml-[10px]">
                      <img src={arrow} />
                    </div>
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img src={get} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-[64px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            More Product Features
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px] mb-[64px] lg:mb-[81px] text-center lg:w-[800px] text-gray-600 ">
              Keeping your eye on the ball while performing a deep dive on the
              start-up mentality to derive convergence on cross-platform
              integration.
            </h4>
          </div>
        </div>

        {/* <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[50px]  xl:gap-[70px] items-center">
          <div className="md:col-start-2 md:col-end-3">
            <img src={background02} />
          </div>
          <div className="md:col-start-1 md:col-end-2 mt-[35px] md:mt-[0px]">
            <div className="mb-[35px]">
              <div className="flex items-center">
                <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                  <img src={icon5} />
                </div>
                <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                  Seamless Integration
                </h1>
              </div>
              <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px]  text-gray-600 ">
                AlliancePay offers easy integration with popular e-commerce
                platforms, making it simple for businesses to start accepting
                online payments.
              </h4>
              <button className="bg-white flex text-primary items-center text-[12px] md:text-[16px] font-semibold ">
                Start now
                <div className="w-[8px] md:w-[12px] ml-[10px]">
                  <img src={arrow} />
                </div>
              </button>
            </div>

            <div className="mb-[35px]">
              <div className="flex items-center">
                <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                  <img src={icon6} />
                </div>
                <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                  Advanced Fraud Detection
                </h1>
              </div>
              <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px] text-gray-600 ">
                AlliancePay uses advanced fraud detection and prevention
                measures to help businesses minimize the risk of fraudulent
                transactions.
              </h4>
              <button className="bg-white flex text-primary items-center text-[12px] md:text-[16px] font-semibold ">
                Start now
                <div className="w-[8px] md:w-[12px] ml-[10px]">
                  <img src={arrow} />
                </div>
              </button>
            </div>

            <div className="mb-[35px]">
              <div className="flex items-center">
                <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                  <img src={icon7} />
                </div>
                <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                  Customizable Payment Pages
                </h1>
              </div>
              <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px]  text-gray-600 ">
                We allows businesses to customize their payment pages to match
                their branding. This creates a consistent and professional user
                experience for customers.
              </h4>
              <button className="bg-white flex text-primary items-center text-[12px] md:text-[16px] font-semibold ">
                Start now
                <div className="w-[8px] md:w-[12px] ml-[10px]">
                  <img src={arrow} />
                </div>
              </button>
            </div>
          </div>
        </div> */}

        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[50px]  xl:gap-[70px] items-center">
          <div className="md:col-start-2 md:col-end-3">
            <img src={background02} />
          </div>
          <div className="md:col-start-1 md:col-end-2 mt-[35px] md:mt-[0px]">
            <div className="mb-[35px]">
              <div className="flex items-center">
                {/* <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                  <img src={icon5} />
                </div> */}
                <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                  Our mission
                </h1>
              </div>
              <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px]  text-gray-600 ">
                To provide secure payment solution to businesses across the
                globe.
              </h4>
              <button className="bg-white flex text-primary items-center text-[12px] md:text-[16px] font-semibold ">
                Start now
                <div className="w-[8px] md:w-[12px] ml-[10px]">
                  <img src={arrow} />
                </div>
              </button>
            </div>

            <div className="mb-[35px]">
              <div className="flex items-center">
                {/* <div className="mr-[8px] w-[30px] h-[30px] xl:w-[48px] xl:h-[48px]">
                  <img src={icon6} />
                </div> */}
                <h1 className="text-[14px] 2xl:text-[22px] lg:text-[24px] font-semibold">
                  Our vision
                </h1>
              </div>
              <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px] text-gray-600 ">
                To create a world where payments become so seamless it is almost
                invincible!
              </h4>
              <button className="bg-white flex text-primary items-center text-[12px] md:text-[16px] font-semibold ">
                Start now
                <div className="w-[8px] md:w-[12px] ml-[10px]">
                  <img src={arrow} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 relative">
        <div className="absolute top-0 left-0 w-[82px] md:w-[347px]">
          <img src={flash} />
        </div>
        <div className="absolute bottom-0 right-0 w-[82px] md:w-[347px]">
          <img src={flash2} />
        </div>
        <div className="py-[64px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
          <div className="xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:grid-flow-col md:gap-[25px]  xl:gap-[40px] items-center">
            <div className=" xl:col-start-2 xl:col-end-3 z-40 flex justify-center">
              <img src={background3} />
            </div>
            <div className="xl:col-start-1 xl:col-end-2 z-40 mt-[32px] mb-[0px]">
              <div className="flex justify-center">
                <div className="z-40 ">
                  <div className="z-40 relative px-[18px] md:px-[30px] pt-[15px] pb-[7px] w-[270px] sm:w-[270px]  md:w-[430px] xl:w-[475px]">
                    <div className="absolute top-0 left-0 md:w-[30px] w-[20px]">
                      <img src={quote1} />
                    </div>
                    <div className="absolute bottom-0 right-0 md:w-[30px] w-[20px]">
                      <img src={quote2} />
                    </div>
                    <div className="flex ">
                      <h4 className="md:text-[35px] text-[22px] xl:text-[40px] font-semibold -mt-[10px] mr-[10px] z-40">
                        Simple
                      </h4>
                      <h4 className="md:text-[35px] text-[22px] xl:text-[40px] font-semibold -mt-[10px] text-primary z-40">
                        integrations.
                      </h4>
                    </div>
                    <h4 className="md:text-[35px] text-[22px] xl:text-[40px] font-semibold  lg:text-start -mt-[10px] z-40">
                      Build for developers.
                    </h4>
                  </div>

                  <h4 className="mt-[10px] text-[12px] md:text-[16px]  z-40 px-[18px] md:px-[30px]">
                    Build custom payments experiences with well-documented APIs
                  </h4>

                  <button className=" flex text-white bg-primary hover:bg-blue-800 items-center text-[12px] md:text-[16px] font-semibold mt-[43px] z-40 px-[18px] py-[12px] rounded-[30px] mx-[18px] md:px-[30px]">
                    Explore the Docs
                    <div className="w-[8px] md:w-[12px] ml-[10px] ">
                      <img src={arrow02} />
                    </div>
                  </button>

                  <div className="flex  mx-[30px] mt-[53px] items-center">
                    <div className="mr-[66px]">
                      <img src={tv} />
                    </div>
                    <div className="mr-[66px]">
                      <img src={flag} />
                    </div>
                    <div>
                      <img src={paper} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-[64px] md:pb-[40px]  xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-x-[25px]  lg:gap-x-[90px] xl:gap-x-[200px] items-center">
          <div className="md:col-start-1 md:col-end-2 z-40">
            <div className="flex justify-center">
              <div className="z-40 ">
                <div className="z-40 relative  pt-[15px] pb-[7px] w-[270px] sm:w-auto">
                  <h4 className="sm:text-[26px] text-[22px] xl:text-[40px] font-semibold  lg:text-start -mt-[10px] z-40">
                    Simplified &
                  </h4>
                  <h4 className="sm:text-[26px] text-[22px] xl:text-[40px] font-semibold -mt-[10px] text-primary z-40">
                    Secured
                  </h4>
                  <div className="flex ">
                    <h4 className="sm:text-[26px] text-[22px] xl:text-[40px] font-semibold -mt-[10px] mr-[10px] z-40">
                      Payment Platform
                    </h4>
                  </div>
                  <h4 className="sm:text-[26px] text-[22px] xl:text-[40px] font-semibold  lg:text-start -mt-[10px] z-40">
                    Advantage
                  </h4>
                </div>

                <h4 className="mt-[10px] text-[12px] md:text-[16px]  z-40  mb-[24px] md:mt-[0px] font-medium">
                  To ensure a secure and seamless payment experience for our
                  customers, we have developed a payment infrastructure with
                  security at its core. Our advanced system is equipped with a
                  real-time AML transaction monitoring system that safeguards
                  all transactions in real-time.
                  <br></br>
                  We are PCI-DSS Compliant which signifies that AlliancePay has
                  satisfied the highest measures of Security Audit. Your
                  customers and partners can be rest assured that transactions
                  on our platform are safe and secure.
                </h4>
              </div>
            </div>
          </div>
          <div className=" md:col-start-2 md:col-end-3 z-40 flex justify-center">
            <img src={background5} />
          </div>
        </div>
        <div className=" z-40  font-light">
          <div className="md:grid md:grid-cols-2 xl:items-center ms:gap-x-[25px]  lg:gap-x-[90px] xl:gap-x-[200px] md:mt-[30px]">
            {/* <h4 className="text-[8px] md:text-[14px] col-start-1 col-end-2 mt-[24px] md:mt-[0px]">
              We take security and compliance seriously. That's why we invest in
              resources that keep us compliant with regulatory standards,
              keeping you and your money safe from bad actors.
            </h4> */}
            <div className=" col-start-2 col-end-3 ">
              <img className="mx-auto w-[119px]" src={pci} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-white py-[64px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div className="relative ">
          <div className="absolute bottom-0 right-0 hidden md:flex">
            <img className="" src={layer} />
          </div>
          <div className=" md:py-[124px] py-[13px]   lg:px-[86px] px-[52px] md:px-[30px] bg-gradient-to-br from-primary via-indigo-400 to-blue-300 md:rounded-[30px] rounded-[11px] ">
            <div className="">
              <h4 className="text-white text-[14px] md:text-[18px] font-extralight">
                Checkout, API
              </h4>
              <h4 className="md:text-[35px] text-[20px] xl:text-[40px] font-semibold text-white md:w-[550px] xl:w-[600px] leading-8 md:leading-10">
                Better payment experiences with optimized checkout
              </h4>
              <button className=" flex text-primary bg-white items-center text-[12px] md:text-[16px] font-semibold mt-[14px] z-40 px-[18px] py-[12px] rounded-[30px]">
                Learn more
                <div className="w-[8px] md:w-[12px] ml-[10px] ">
                  <img src={arrow} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-white pb-[64px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]  flex justify-center">
        <div className="sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-y-[35px] w-[180px] sm:w-full">
          <div className="pb-[40px] sm:pb-[0px] border-b-[1px] sm:border-r-[1px] sm:border-b-[0px] border-gray-300">
            <div className="flex justify-center">
              <img className="w-[38px] h-[38px]" src={light2} />
            </div>
            <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
              Settlements
            </h4>
            <h4 className="flex justify-center text-[15px] text-gray-400 text-center mx-[10px]">
              Payment Options (Verve, Mastercard, Visa, QR, Bank Transfers etc)
            </h4>
          </div>
          <div className="py-[40px] sm:py-[0px] border-b-[1px] xl:border-r-[1px] sm:border-b-[0px] border-gray-300">
            <div className="flex justify-center ">
              <img className="w-[38px] h-[38px]" src={link} />
            </div>
            <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
              Pay-ins
            </h4>
            <h4 className="flex justify-center text-[15px] text-gray-400 text-center">
              Sell faster with payment links
            </h4>
          </div>
          <div className="py-[40px] sm:py-[0px] sm:border-r-[1px] border-b-[1px] xl:border-r-[1px] sm:border-b-[0px] border-gray-300">
            <div className="flex justify-center">
              <img className="w-[38px] h-[38px]" src={moneys} />
            </div>
            <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
              Payout, API
            </h4>
            <h4 className="flex justify-center text-[15px] text-gray-400 text-center">
              Currencies (Naira, USD)
            </h4>
          </div>
          <div className="pt-[40px] sm:pt-[0px] ">
            <div className="flex justify-center">
              <img className="w-[38px] h-[38px]" src={driver} />
            </div>
            <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
              Balance, API
            </h4>
            <h4 className="flex justify-center text-[15px] text-gray-400 text-center">
              Real-time balances
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white py-[64px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            What Our Customers are Saying
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px] mb-[40px] lg:mb-[60px] text-center lg:w-[800px] text-gray-600 ">
              Read below from our trusted client. See how they share their
              experience using our service
            </h4>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-3 gap-y-[35px] mx-auto  items-start">
          <div className="pt-[40px] xl:pt-[0px] ">
            <div className="flex justify-center">
              <img className="-mr-[13px] w-[35px] h-[35px]" src={profile1} />
              <img className="-mr-[13px] w-[35px] h-[35px]" src={profile2} />
              <img className="-mr-[13px] w-[35px] h-[35px]" src={profile3} />
              <img className="-mr-[13px] w-[35px] h-[35px]" src={profile4} />
            </div>

            <h4 className="flex justify-center text-[15px] text-black text-center mt-[16px] xl:w-[311px] xl:mx-auto">
              AlliancePay is the best payment gateway I have used for my online
              business. Their platform is easy to use, supports multiple payment
              channels, and is highly secure and reliable. Their customer
              support is also top-notch. I highly recommend AlliancePay to any
              business looking for a trustworthy payment solution.
            </h4>
          </div>

          <div className="pt-[40px] xl:pt-[0px] ">
            <div className="flex justify-center">
              <img className="mx-[2px] w-[24px] h-[24px]" src={star} />
              <img className="mx-[2px] w-[24px] h-[24px]" src={star} />
              <img className="mx-[2px] w-[24px] h-[24px]" src={star} />
              <img className="mx-[2px] w-[24px] h-[24px]" src={star} />
              <img className="mx-[2px] w-[24px] h-[24px]" src={star} />
            </div>

            <h4 className="flex justify-center text-[15px] text-black text-center mt-[16px] xl:w-[311px] xl:mx-auto">
              5 out of 5 stars from 123 reviews from our users
            </h4>
          </div>

          <div className="pt-[40px] xl:pt-[0px] ">
            <div className="flex justify-center">
              <img className="mx-[2px] w-[24px] h-[24px]" src={card} />
            </div>

            <h4 className="flex justify-center text-[15px] text-black text-center mt-[16px] xl:w-[311px] xl:mx-auto">
              Their platform is intuitive, efficient, and supports various
              payment channels that cater to my customers' needs. What impressed
              me the most was the speed and ease of integration
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
