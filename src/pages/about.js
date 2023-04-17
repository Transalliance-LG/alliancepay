import React from "react";
import abouticon from "../assets/abouticon.png";
import background02 from "../assets/background02.png";
import down2 from "../assets/down2.png";
import ceo from "../assets/ceo.png";
import md from "../assets/md.png";
import cfo from "../assets/cfo.png";

const about = () => {
  return (
    <div>
      <div className="bg-blue-50 py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            About Alliancepay
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  text-center lg:w-[350px] text-gray-600 ">
              Alliancepay is your trusted partner for secure and convenient
              payment solutions.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div className="mb-[24px]">
          <h1 className="flex justify-center text-center text-[20px] lg:text-[25px] font-semibold">
            Welcome
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  text-left  text-gray-600 ">
              AlliancePay is your trusted partner for secure and convenient
              payment services solutions. We offer a wide range of payment
              options and tools designed to meet your need as a business entity
              and individuals alike. Whether you’re looking to process
              transactions, use our Checkout service, integrate into your
              existing website or App, or streamline your payment operations,
              AlliancePay has the expertise and technology to help you succeed.
            </h4>
          </div>
        </div>
        <div
          className="md:flex md:items-center
        px-[15px] py-[15px] md:px-[30px] md:py-[30px] bg-gray-100"
        >
          <div>
            <img src={abouticon} />
          </div>
          <div className="md:ml-[30px] mt-[16px] md:mt-[0px]">
            <h4 className="text-[12px] md:text-[16px] text-gray-500 mb-[23px]">
              We are a brand trusted by many, our many successes from our Parent
              company (Transallians Group) and subsidiaries speak for us.
            </h4>
            <h4 className="text-[12px] md:text-[16px] font-semibold">
              Chairman Transalliance Group
            </h4>
          </div>
        </div>
        <div>
          <h4 className="mt-[24px]  text-[12px] md:text-[16px]  text-left  text-gray-600">
            AlliancePay platform is built on cutting-edge security and
            encryption protocols, ensuring that your transactions are safe and
            confidential. We also offer a range of customizable features and
            integrations, so you can tailor our solutions to your specific
            needs.
          </h4>
          <h4 className="mt-[24px]  text-[12px] md:text-[16px]  text-left  text-gray-600">
            At AlliancePay, we understand that payments are the lifeblood of any
            business. That’s why we’ve developed a range of tools to help you
            get paid quickly and easily. Our payment gateway offers a variety of
            features, including fast processing times, flexible payment options,
            and real-time tracking and reporting.
          </h4>
          <h4 className="mt-[24px]  text-[12px] md:text-[16px]  text-left  text-gray-600">
            Thank you for choosing AlliancePay. We look forward to helping you
            achieve your payment goals.
          </h4>
        </div>
      </div>

      <div className="bg-blue-50 py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[20px]  xl:gap-[70px] items-center">
          <div className="md:col-start-2 md:col-end-3">
            <img src={background02} />
          </div>
          <div className="md:col-start-1 md:col-end-2 mt-[35px] md:mt-[0px] ">
            <ol>
              <li className="font-semibold">
                <div className="mb-[35px] ">
                  <h4 lassName=" mt-[6px] lg:mt-[19px]  md:text-[16px] mb-[16px]   text-black mb-[4px] ">
                    Our Coverage
                  </h4>
                  <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px] font-normal  text-black ">
                    Our services extends all over Nigeria and beyond. We have
                    capability to process payments in Naira, Dollars and Pounds.
                    Whatever currency or process you thinking, we’ve got you
                    covered.
                  </h4>
                </div>
              </li>

              <li className="font-semibold">
                <div className="mb-[35px] ">
                  <h4 lassName=" mt-[6px] lg:mt-[19px]  md:text-[16px] mb-[16px]   text-black mb-[4px] ">
                    Our Culture
                  </h4>
                  <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px] font-normal  text-black ">
                    At AlliancePay, we make work fun, employing only the best
                    hands who enjoy what they do beyond earning a pay. This is
                    reflected in our superb customer service. Click here to get
                    started with Agents
                  </h4>
                </div>
              </li>

              <li className="font-semibold">
                <div className="mb-[35px] ">
                  <h4 lassName=" mt-[6px] lg:mt-[19px]  md:text-[16px] mb-[16px]   text-black mb-[4px] ">
                    AP Operations
                  </h4>
                  <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px] font-normal  text-black ">
                    We operate using the best and internationally recognized
                    SOPs. This is particulalry obvious in our various
                    certifcations by ISO, CBN, NDPB.
                  </h4>
                </div>
              </li>

              <li className="font-semibold">
                <div className="mb-[35px] ">
                  <h4 lassName=" mt-[6px] lg:mt-[19px]  md:text-[16px] mb-[16px]   text-black mb-[4px] ">
                    Future of payments
                  </h4>
                  <h4 className=" mt-[6px] lg:mt-[19px] text-[12px] md:text-[16px] mb-[16px] lg:mb-[16px] font-normal  text-black ">
                    We are constantly seeking new breakthroughs and solutions to
                    cater to problems business haven’t reported and ensuuring we
                    make our newer products far easier and efficient than the
                    last.
                  </h4>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-white py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div className="mb-[24px]">
          <h1 className="flex justify-center text-center text-[20px] lg:text-[25px] font-semibold">
            The Core of Our Team
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-center text-[12px] md:text-[16px] text-gray-600 ">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment of people and great talent
              that truly rocks.
            </h4>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-[32px] mt-[64px]">
          <div className="flex justify-center">
            <div>
              <div>
                <img src={ceo} />
              </div>
              <h4 className="mt-[16px] font-semibold md:text-[22px] text-[18px] ">
                Kamsi Okafor
              </h4>
              <h4 className=" font-normal md:text-[16px] text-[14px] ">
                C.E.O
              </h4>
            </div>
          </div>

          <div className="flex justify-center mt-[32px] lg:mt-[0px]">
            <div>
              <div>
                <img src={md} />
              </div>
              <h4 className="mt-[16px] font-semibold md:text-[22px] text-[18px] ">
                Afam Obodozie
              </h4>
              <h4 className=" font-normal md:text-[16px] text-[14px] ">M.D</h4>
            </div>
          </div>

          <div className="flex justify-center mt-[32px] lg:mt-[0px]">
            <div>
              <div>
                <img src={cfo} />
              </div>
              <h4 className="mt-[16px] font-semibold md:text-[22px] text-[18px] ">
                Femi Adedipe
              </h4>
              <h4 className=" font-normal md:text-[16px] text-[14px] ">
                C.F.O
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div className="mb-[24px]">
          <h1 className="flex justify-center text-center text-[20px] lg:text-[25px] font-semibold">
            Frequently asked questions
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-center text-[12px] md:text-[16px]   text-gray-600 ">
              We have collated and compiled previously and frequently asked
              questions with other resourceful information to get you started
              with Alliancepay Integration
            </h4>
          </div>
        </div>
        <div>
          <div className=" border-[1px] border-gray-200 rounded-[5px] mt-[64px]">
            <div className="py-[28px] px-[32px] flex justify-between items-center border-b-[1px] border-gray-300">
              <div>
                <h4 className="text-[12px] md:text-[16px] lg:text-[16px] font-medium">
                  How is Alliancepay different from other payment gateway in
                  Nigeria?
                </h4>
                <h4 className="text-[10px] md:text-[14px] lg:text-[16px] font-light">
                  We are a brand trusted by many.
                </h4>
              </div>
              <button className="py-[4px] px-[12px] rounded-[5px] bg-blue-50 text-[14px] text-blue-400">
                New
              </button>
            </div>
            <div className="py-[28px] px-[32px] flex justify-between items-center border-b-[1px] border-gray-300">
              <h4 className="text-[12px] md:text-[16px] lg:text-[16px] font-medium">
                Do I get any discounts?
              </h4>
              <div>
                <img src={down2} />
              </div>
            </div>
            <div className="py-[28px] px-[32px] flex justify-between items-center border-b-[1px] border-gray-300">
              <h4 className="text-[12px] md:text-[16px] lg:text-[16px] font-medium">
                Who bears the cost of a transaction?
              </h4>
              <div>
                <img src={down2} />
              </div>
            </div>
            <div className="py-[28px] px-[32px] flex justify-between items-center border-b-[1px] border-gray-300">
              <h4 className="text-[12px] md:text-[16px] lg:text-[16px] font-medium">
                Does Alliancepay offer chargeback levels?
              </h4>
              <div>
                <img src={down2} />
              </div>
            </div>
            <div className="py-[28px] px-[32px] flex justify-between items-center border-b-[1px] border-gray-300">
              <h4 className="text-[12px] md:text-[16px] lg:text-[16px] font-medium">
                How does a discount work?
              </h4>
              <div>
                <img src={down2} />
              </div>
            </div>
            <div className="py-[28px] px-[32px] flex justify-between items-center border-b-[1px] border-gray-300">
              <h4 className="text-[12px] md:text-[16px] lg:text-[16px] font-medium">
                Do I get to meet the Alliancepay team?
              </h4>
              <div>
                <img src={down2} />
              </div>
            </div>
            <div className="py-[28px] px-[32px] flex justify-between items-center ">
              <h4 className="text-[12px] md:text-[16px] lg:text-[16px] font-medium">
                Where is Alliancepay office located?
              </h4>
              <div>
                <img src={down2} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[64px] py-[32px]">
          <h4 className="flex justify-center md:text-[20px] text-[18px] font-mrdium mb-[18px]">
            Still have questions?
          </h4>
          <h4 className="flex justify-center md:text-[18px] text-[16px] font-normal mb-[32px]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </h4>
          <button className="flex justify-center mx-auto md:text-[16px] text-[14px] font-semibold bg-primary text-white py-[8px] px-[16px] md:py-[10px] md:px-[18px] rounded-[8px]">
            Get in touch
          </button>
        </div>
      </div>

      <div className="bg-primary py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <h4 className="lg:text-[32px] font-semibold text-[20px] text-white flex justify-center text-center w-auto mx-auto md:w-[400px] lg:w-[700px]">
          Welcome to your new digital reality that which will rock your world.
        </h4>
        <div className="flex justify-center mt-[32px]">
          <button className="flex justify-center md:text-[16px] text-[14px] font-semibold bg-white text-primary  rounded-[8px]  px-[18px] py-[12px]">
            Sign up
          </button>
          <button className="flex justify-center md:text-[16px] text-[14px] font-semibold bg-primary text-white px-[18px] py-[12px] rounded-[8px]  ">
            Login in
          </button>
        </div>
      </div>
    </div>
  );
};

export default about;