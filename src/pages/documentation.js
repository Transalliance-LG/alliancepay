import React, { useState } from "react";
import { Link } from "react-router-dom";
import down2 from "../assets/down2.png";

const Documentation = () => {
  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  const Dropdown = [
    {
      title: "What is AlliancePay?",
      content:
        "AlliancePay is a payment gateway that enables businesses to accept payments from customers through various payment channels, including debit/credit cards, bank transfers, and mobile wallets.",
    },
    {
      title: "What are connect platforms?",
      content:
        "Connect platforms are platforms that facilitate payments between two or more parties, such as marketplaces, crowdfunding platforms, or peer-to-peer lending platforms.",
    },
    {
      title: "How do I install AlliancePay on my connect platform?",
      content:
        "You can integrate AlliancePay with your connect platform by using our APIs and SDKs. We offer APIs for various programming languages, including PHP, Java, and Python, as well as SDKs for mobile platforms such as iOS and Android. Please refer to our developer documentation for more information on how to integrate AlliancePay with your connect platform.",
    },
    {
      title: "How do I get started with AlliancePay integration?",
      content:
        "To get started with AlliancePay integration, you need to create an account with us and obtain your API keys. Once you have your API keys, you can start integrating AlliancePay with your connect platform using our APIs and SDKs. Please refer to our developer documentation for detailed instructions on how to integrate AlliancePay with your connect platform.",
    },
    {
      title: "What payment channels does AlliancePay support?",
      content:
        "AlliancePay supports various payment channels, including debit/credit cards, bank transfers, and mobile wallets such as Paystack, Flutterwave, and Paga.",
    },
    {
      title:
        "What server settings do I need to configure for AlliancePay integration?",
      content:
        "To integrate AlliancePay with your connect platform, you may need to configure your server settings to enable HTTPS communication, as well as set up webhooks for receiving notifications about payment events. Please refer to our developer documentation for detailed instructions on how to configure your server settings for AlliancePay integration.",
    },
    {
      title: "How do I test my AlliancePay integration?",
      content:
        "You can test your AlliancePay integration by using our sandbox environment, which simulates the behavior of our production environment without actual financial transactions. You can use our test API keys and test card numbers to test your integration. Please refer to our developer documentation for more information on how to test your AlliancePay integration.",
    },
  ];

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
          <button className=" flex justify-center text-white hover:bg-blue-800 bg-primary items-center text-[12px] md:text-[16px] font-semibold md:mt-[20px] z-40  rounded-[30px]  md:px-[30px] md:py-[16] px-[6px] py-[4px]">
            Connect Platforms
          </button>
        </div>

        <div className="flex justify-center px-[10px] sm:px-[0px]">
          <button className=" flex justify-center text-primary hover:bg-blue-100  bg-white items-center text-[12px] md:text-[16px] font-semibold md:mt-[20px] z-40  rounded-[30px]    border-[1px] border-primary md:px-[30px] md:py-[16] px-[6px] py-[4px]">
            Web Hooks
          </button>
        </div>
        <div className="flex justify-center px-[10px] sm:px-[0px]">
          <button className=" flex justify-center text-primary hover:bg-blue-100 bg-white items-center text-[12px] md:text-[16px] font-semibold md:mt-[20px] z-40  rounded-[30px]    border-[1px] border-primary md:px-[30px] md:py-[16] px-[6px] py-[4px]">
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
          {Dropdown.map((drop, i) => (
            <div key={i} className="border-b-[1px] border-gray-300">
              <div
                onClick={handleClick(i)}
                className="py-[28px] px-[32px] flex justify-between items-center "
              >
                <h4 className="text-[12px] md:text-[16px] lg:text-[16px] cursor-pointer font-medium">
                  {drop.title}
                </h4>
                <div
                  onClick={handleClick(i)}
                  className={`text-sm duration-300 cursor-pointer ${
                    clickedIndex[i] ? "rotate-90" : "rotate-0"
                  } `}
                >
                  <img
                    className="w-[10px]"
                    onClick={handleClick(i)}
                    src={down2}
                  />
                </div>
              </div>
              {clickedIndex[i] ? (
                <h4 className="text-[10px] md:text-[14px] lg:text-[16px]py-[34px] px-[38px] font-light -mt-[20px] mb-[28px]">
                  {drop.content}
                </h4>
              ) : null}
            </div>
          ))}

          {/* <div className="py-[28px] px-[32px] flex justify-between items-center border-b-[1px] border-gray-300">
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
          </div> */}
        </div>
      </div>

      <div className="bg-primary py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold text-white">
            Request a Feature or Open a Ticket
          </h1>
          <div className="flex justify-center">
            <button className=" flex text-primary bg-white hover:bg-blue-100 items-center text-[12px] md:text-[16px] font-semibold mt-[43px] z-40 px-[18px] py-[12px] rounded-[30px] mx-[18px] md:px-[30px]">
              <Link to="/contactus">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
