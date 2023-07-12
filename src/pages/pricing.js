import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import visa from "../assets/visa.png";
import master from "../assets/master.png";
import verve from "../assets/verve.png";
import bank from "../assets/bank.png";
import transfer from "../assets/transfer.png";
import plink from "../assets/plink.png";

const Pricing = () => {
  return (
    <div>
      <div className="bg-blue-50 py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div className="mb-[30px]">
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            Simple & very competitive rates
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  text-center lg:w-[350px] text-gray-600 ">
              Accept payments across the globe without any hidden charges
            </h4>
          </div>
        </div>

        <div className="my-[20px] md:py-[40px]">
          <h4 className="md:text-[20px] text-[16px] font-medium text-center">
            Local Collection – 1.4% capped @ NGN 2000
          </h4>
          <div className="grid md:grid-cols-7 grid-cols-4 gap-y-[15px] mt-[15px]">
            <img className="w-[60px] mx-auto" src={master} />
            <img className="w-[60px] mx-auto" src={visa} />

            <img className="w-[60px] mx-auto my-auto" src={verve} />

            <BsQrCode className="text-[35px] text-primary mx-auto my-auto" />
            <img className="w-[60px] mx-auto my-auto" src={bank} />
            <img className="w-[60px] mx-auto my-auto" src={transfer} />
            <img className="w-[50px] mx-auto my-auto" src={plink} />
          </div>
        </div>

        <div className="my-[20px] md:py-[40px]">
          <h4 className="md:text-[20px] text-[16px] font-medium text-center">
            International Collection - 4% 
          </h4>
          <div className="grid md:grid-cols-6 grid-cols-4 gap-y-[15px] mt-[15px]">
            <img className="w-[60px] mx-auto" src={master} />
            <img className="w-[60px] mx-auto" src={visa} />

            <BsQrCode className="text-[35px] text-primary mx-auto my-auto" />
            <img className="w-[60px] mx-auto my-auto" src={bank} />
            <img className="w-[60px] mx-auto my-auto" src={transfer} />
            <img className="w-[50px] mx-auto my-auto" src={plink} />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <h4 className="text-[20px] font-semibold mr-[10px]">Payouts –</h4>
          <div>
            <h4 className="text-[16px] font-medium">
              NGN 10 (For Transfer of 5,000 and below) per transfer
            </h4>
            <h4 className="text-[16px] font-medium">
              NGN 25 (For Transfer of 5,001 and 50,000) per transfer
            </h4>
            <h4 className="text-[16px] font-medium">
              NGN 40 (For Transfer of 50,001 and above) per transfer
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
