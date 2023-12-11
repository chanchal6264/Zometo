import React from "react";

function Footer() {
  return (
    <>
      <div className=" px-40 py-10 bg-[#f3f3f1]">
        <div className="flex justify-between">
          <div className="font-extrabold  text-3xl p-4">Zomato</div>
          <div>
            <button className="m-2 p-1 px-5 text-lg rounded-lg border-2">
              India
            </button>
            <button className="m-2 p-1 px-5 text-lg rounded-lg border-2">
              English
            </button>
          </div>
        </div>
        <div className="flex p-4">
          <div className="w-1/5">
            <p className=" text-xl text-black">ABOUT ZOMATO</p>
            <ul className="text-gray-500 cursor-pointer ">
              <li className="hover:text-gray-700">Who We Are</li>
              <li className="hover:text-gray-700">Blog</li>
              <li className="hover:text-gray-700">Work With Us</li>
              <li className="hover:text-gray-700">Investor Relations</li>
              <li className="hover:text-gray-700">Report Fraud</li>
              <li className="hover:text-gray-700">Press Kit</li>
              <li className="hover:text-gray-700">Contact Us</li>
            </ul>
          </div>
          <div className="w-1/5">
            <p className=" text-xl tracking-[3px]">ZOMAVERSE</p>
            <ul className="text-gray-500 cursor-pointer ">
              <li className="hover:text-gray-700">ZOMATO</li>
              <li className="hover:text-gray-700">Blinkit</li>
              <li className="hover:text-gray-700">Feeding India</li>
              <li className="hover:text-gray-700">Hyperpure</li>
              <li className="hover:text-gray-700">Zomaland</li>
            </ul>
          </div>
          <div className="w-1/5">
            <p className="text-xl tracking-[3px]">FOR RESTAURANTS</p>
            <ul className="text-gray-500 cursor-pointer ">
              <li className="hover:text-gray-700">Partner With Us</li>
              <li className="hover:text-gray-700">Apps For You</li>
            </ul>

            <p className=" text-xl mt-4 tracking-[3px]">FOR ENTERPRISES</p>
            <ul className="text-gray-500 cursor-pointer ">
              <li className="hover:text-gray-700">Zomato For Enterprise</li>
            </ul>
          </div>

          <div className="w-1/5">
            <p className="text-xl tracking-[3px]">LEARN MORE</p>
            <ul className="text-gray-500 cursor-pointer ">
              <li className="hover:text-gray-700">Privacy</li>
              <li className="hover:text-gray-700">Security</li>
              <li className="hover:text-gray-700">Terms</li>
              <li className="hover:text-gray-700">Sitemap</li>
            </ul>
          </div>
          <div>
            <p className=" text-xl tracking-[3px]">SOCIAL LINKS</p>
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
