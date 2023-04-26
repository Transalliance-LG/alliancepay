import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import mail from "../assets/mail.png";
import office from "../assets/office.png";
import phone from "../assets/phone.png";
import contactbg from "../assets/contactbg.png";

const Contactus = () => {
  const form = useRef();

  const [response, setResponse] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pgq9k7n",
        "template_zdrbwii",
        form.current,
        "GjlSR1KFLOPRMtcou"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponse("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  setTimeout(() => {
    setResponse(false);
  }, 3000);
  return (
    <div>
      <div className="bg-blue-50 py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            Support
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  text-center lg:w-[350px] text-gray-600 ">
              We’ve been told it is possible to revolutionize the payment
              industry. We have not reinvented the wheel, we decided to build
              upon it - successfully.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white py-[32px] md:py-[80px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px]">
        <div>
          <h1 className="flex justify-center text-center text-[25px] lg:text-[32px] font-semibold">
            We’d love to hear from you
          </h1>
          <div className="flex justify-center">
            <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  text-center lg:w-[600px] text-gray-600 ">
              Our friendly team is always here to chat.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-white pb-[20px] md:py-[40px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] md:grid md:grid-cols-3">
        <div className="py-[40px] md:py-[0px]  border-b-[1px] xl:border-r-[1px] sm:border-b-[0px] border-gray-300">
          <div className="flex justify-center">
            <img className="w-[52px] h-[52px]" src={mail} />
          </div>
          <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
            Email
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-gray-400 text-center">
            Our friendly team is here to help.
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-primary text-center">
            support@alliancepay.io
          </h4>
        </div>

        <div className="py-[40px] md:py-[0px]  border-b-[1px] xl:border-r-[1px] sm:border-b-[0px] border-gray-300">
          <div className="flex justify-center">
            <img className="w-[52px] h-[52px]" src={office} />
          </div>
          <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
            Office
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-gray-400 text-center">
            Come say hello at our office HQ.
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-primary text-center">
            200c Muri Okunola Street, Victoria Island Lagos
          </h4>
        </div>

        <div className="py-[40px] md:py-[0px]  ">
          <div className="flex justify-center">
            <img className="w-[52px] h-[52px]" src={phone} />
          </div>
          <h4 className="flex justify-center text-[18px] font-semibold mt-[22px]">
            Phone
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-gray-400 text-center">
            Mon-Fri from 8am to 5pm.
          </h4>
          <h4 className="flex justify-center text-[15px] mt-[10px] text-primary text-center">
            + (234)909 871 1182
          </h4>
        </div>
      </div>

      <div className="bg-white pb-[20px] md:py-[40px] xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] lg:grid lg:grid-cols-2 items-center">
        <div className="lg:px-[80px] lg:py-[40px]">
          <div className="mb-[24px]">
            <h1 className="  text-[25px] lg:text-[32px] font-semibold">
              Get in touch
            </h1>
            <div className="">
              <h4 className=" mt-[6px] lg:mt-[16px] text-[12px] md:text-[16px]  lg:w-[600px] text-gray-500 ">
                Our friendly team would love to hear from you.
              </h4>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="md:grid grid-cols-2 2xl:gap-[32px] gap-[15px]">
              <div className="mt-[24px]">
                <h4 className="mb-[6px] text-[16px] ">First name</h4>
                <input
                  className=" w-full border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="mt-[24px]">
                <h4 className="mb-[6px] text-[16px] ">Second name</h4>
                <input
                  className=" w-full border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
                  type="text"
                  name="second_name"
                  placeholder="Second name"
                  required
                />
              </div>
            </div>
            <div className="mt-[24px]">
              <h4 className="mb-[6px] text-[16px] ">Email</h4>
              <input
                className=" w-full border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
                type="email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="mt-[24px]">
              <h4 className="mb-[6px] text-[16px] ">Phone number</h4>
              <input
                className=" w-full border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
                type="phone"
                name="phone"
                placeholder="NG"
                required
              />
            </div>
            <div className="mt-[24px]">
              <h4 className="mb-[6px] text-[16px] ">Message</h4>
              <textarea
                className=" w-full border-[1px] border-gray-300 px-[16px] py-[12px]  rounded-[8px]"
                rows="5"
                name="message"
              />
            </div>
            <div className="flex items-center mt-[24px]">
              <input className="w-[15px] h-[15px]" type="radio" />
              <h4 className="text-[14px] ml-[8px] text-primary">
                You agree to our friendly privacy policy.
              </h4>
            </div>
            {response && (
              <h4 className="flex justify-center w-full bg-blue-50 mt-[32px] rounded-[5px] text-[16px] py-[10px]">
                {response}
              </h4>
            )}

            <button
              type="submit"
              className="mt-[32px] flex justify-center w-full text-white bg-primary lg:text-[16px] text-[14px] py-[12px] rounded-[8px]"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="hidden lg:flex">
          <img src={contactbg} />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
