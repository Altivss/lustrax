import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-black text-white px-6 py-10 bg-black">
      {/* Logo + Company horizontally aligned and vertically centered */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-10">
        {/* Left: Logo + Privacy below */}
        <div className="flex flex-col justify-center">
          {/* Logo image */}
          <img src={assets.footer} className="w-48 sm:w-64" alt="Lustrax Logo" />

          {/* Privacy links below logo */}
          <div className="text-sm text-gray-400 mt-4">
            <span className="cursor-pointer hover:underline mr-4">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Services</span>
          </div>
        </div>

        {/* Right: Company vertically aligned center */}
        <div className="flex flex-col justify-center h-full mb-26  pl-[210px]">
          <p className="text-xl font-semibold mb-5 ">Company</p>
          <ul className="flex flex-col gap-1 text-gray-400 text-sm">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Contacts</li>
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">Recruitment</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center h-full mb-32">
          <p className="text-xl font-semibold mb-5">Socials</p>
          <ul className="flex flex-col gap-1 text-gray-400 text-sm">
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">Tiktok</li>
            <li className="cursor-pointer">Shopee</li>
            </ul>

            </div>
      </div>
       <div className=" mt-10">
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025 @Auto Beautification- All rights reserved</p>
            </div>
    </div>
  );
};

export default Footer;
