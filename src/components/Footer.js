import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import instagram from "../assets/instagram.png";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = ({ show2, setShow2 }) => {
  const list = [
    "The Board and Management of Alliancepay which operates in the Financial Technology sector is committed to preserving the confidentiality, integrity, and availability of all physical and electronic information assets throughout the organization, in order to preserve its asset, legal, and regulatory as well as contractual, compliance and image. The Integrated Management Systems (ISO 27001, 27017, 27032, and ISO 22301) requirements will continue to be aligned with organizational goals and is also intended to be an enabling mechanism for information sharing, electronic operations, and reducing information & Technology related risks to acceptable levels.",
    "Alliancepay is committed to providing quality services to our customers, both internal and external by aligning Information Technology investments with organizational goals. Alliancepay has aligned its processes and operations to the ISO27001, ISO22301, 200000 (ITIL)standards and PCI-DSS requirements to ensure business continuity, cyber resilience, and protection of its information asset and maximization of benefit/returns on IT investments.",
  ];

  const second = [
    {
      head: "It is, therefore, Alliancepay’s policy to ensure:",
      list: "- Alliancepay’s current strategy and Integrated Management Systems (IMS) provides the context for identifying, assessing, evaluating, and controlling information/process/service-related risks through establishment and maintenance of the IMS. The risk assessment and risk treatment plan capture how identified risks are controlled in alignment with Alliancepay’s risk management strategy.",
    },
    {
      list: "- In particular, business continuity and contingency plans, data backup procedures, access control to systems and information security incident reporting are fundamental to this policy. All employees of Alliancepay shall have the responsibility of reporting incidents ",
    },
    {
      list: "- All employees of Alliancepay and external parties identified in the Management Systems are expected to comply with this policy. All staff and certain external parties will receive or be required to provide evidence of receiving appropriate training. ",
    },
    {
      list: "- Management is committed to the continual improvement of the IMS in the Organizations.",
    },
    {
      list: "- Breach of the policy or security mechanism may warrant disciplinary measures, up to and including termination of employment/contract as well as legal action in line with the Cybercrime Prohibition Act 2015.",
    },
  ];
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
              <a
                href="http://instagram.com/alliancepayhq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[24px] h-[24px]" src={instagram} />
              </a>
            </div>
            <div>
              <a
                href="http://twitter.com/alliancepayhq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter className="text-[24px] text-primary" />
              </a>
            </div>
            <div>
              <a
                href="http://linkedin.com/company/alliancepayhq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="text-[24px] text-primary" />
              </a>
            </div>
          </div>
          <h4 className="my-[16px] text-[12px] md:text-[16px] lg:text-[16px] font-normal">
            info@alliancepay.io, sales@alliancepay.io
          </h4>
        </div>
      </div>
      <div
        className=" grid grid-cols-2 xl:grid-cols-3 md:gap-[20px]
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
                <a
                  href="http://instagram.com/alliancepayhq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-[24px] h-[24px]" src={instagram} />
                </a>
              </div>
              <div>
                <a
                  href="http://twitter.com/alliancepayhq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter className="text-[24px] text-primary" />
                </a>
              </div>
              <div>
                <a
                  href="http://linkedin.com/company/alliancepayhq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="text-[24px] text-primary" />
                </a>
              </div>
            </div>
            <h4 className="my-[16px] text-[12px] md:text-[16px] lg:text-[16px] font-normal">
              info@alliancepay.io, sales@alliancepay.io
            </h4>
          </div>
        </div>

        <div>
          <h1 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Developers
          </h1>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Overview
          </h4>
          <NavLink to="/documentation">
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal cursor-pointer">
              Documentation
            </h4>
          </NavLink>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Integrations
          </h4>
          {/* <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Enterprise
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Solutions
          </h4> */}
        </div>

        <div>
          <h1 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Company
          </h1>
          <NavLink to="/about">
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal cursor-pointer">
              About Us
            </h4>
          </NavLink>
          <a
                href="mailto:sales@alliancepay.io"
                target="_blank"
                rel="noopener noreferrer"
              >
            <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
              Talk to Sales
            </h4>
          </a>
          
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Contact Support
          </h4>
          {/* <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            App
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Blog
          </h4> */}
        </div>

        <div>
          <h1 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Legal
          </h1>
          <h4
            onClick={() => setShow2(!show2)}
            className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal cursor-pointer"
          >
            Privacy Policy
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            News
          </h4>
          {/* <button
            onClick={() => setShow2(!show2)}
            className="rounded-[10px] bg-primary hover:bg-blue-800  text-white md:px-[18px] md:py-[10px] px-[10px] py-[8px] text-[12px] md:text-[16px] sm:text-[16px]"
          >
            IMS policy
          </button> */}
        </div>

        <div>
          <h1 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Pricing
          </h1>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Local
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            International
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Payouts (Shared above)
          </h4>
          {/* <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            App
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Blog
          </h4> */}
        </div>

        <div>
          <h1 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[24px] font-semibold">
            Why Choose Us?
          </h1>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Receive payments.
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Multiple Payment Options.
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            Detailed Reporting
          </h4>
          <h4 className="text-[12px] md:text-[16px] lg:text-[16px] mb-[12px] font-normal">
            PCI DSS
          </h4>
        </div>
      </div>

      <h4 className="flex justify-center text-gray-400 mt-[64px] text-[12px] md:text-[16px] lg:text-[16px]">
        © 2023 Alliancepay. All Rights Reserved.
      </h4>

      <div className="py-[40px] xl:px-[150px] 2xl:px-[250px] lg:px-[30px] px-[5px] md:px-[10px]">
        {show2 ? (
          <div
            className="fixed w-full h-full flex justify-center items-center"
            style={{
              background: "#0007",
              color: "white",
              top: 0,
              left: 0,
              zIndex: 50,
            }}
          >
            <div className="md:w-3/4  bg-white text-black py-[40px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] rounded-[20px] h-[calc(100vh-5.75rem)] overflow-y-auto">
              <div className="flex justify-end mb-[20px]">
                <IoCloseOutline
                  onClick={() => setShow2(!show2)}
                  className="text-[35px] cursor-pointer"
                />
              </div>
              <div>
                <h4 className="text-[18px] font-bold mb-[20px]">
                  IMS POLICY STATEMENT
                </h4>
                {list.map((lists, i) => (
                  <h4 className="mb-[24px] md:mb-[12px] lg:text-[18px] text-[16px] font-medium ">
                    {lists}
                  </h4>
                ))}
                {second.map((second, i) => (
                  <div>
                    <h4 className="text-[16px] font-bold mt-[30px]">
                      {second.head}
                    </h4>
                    <h4 className=" whitespace-pre-line mt-[24px] md:mt-[20px] lg:text-[18px] text-[16px]">
                      {second.list}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Footer;
