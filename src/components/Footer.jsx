import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import frog from "../assets/frog.svg";

const Footer = () => {
    return (
        <footer className="w-full bg-white text-black py-10 border-t border-gray-200">


            <div className="max-w-7xl  mb-7  mx-auto flex justify-center items-center ">

                <img
                    src={frog}
                    alt="Blackribbit Frog"
                    className=" h-36 "
                />
            </div>
            <div className=" max-w-7xl  flex flex-col md:flex-row items-center justify-between px-6">
                {/* Left Nav Links */}
                <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium mb-6 md:mb-0">
                    <li><a href="#" className="hover:text-gray-500 transition">Approach</a></li>
                    <li><a href="#" className="hover:text-gray-500 transition">Culture</a></li>
                    <li><a href="#" className="hover:text-gray-500 transition">Blog</a></li>
                    <li><a href="#" className="hover:text-gray-500 transition">Contact</a></li>
                    <li><a href="#" className="hover:text-gray-500 transition">Privacy Policy</a></li>
                </ul>

                {/* Center Frog Logo + Socials */}
                <div className="flex flex-col items-center mb-6 md:mb-0">

                    <div className="flex space-x-5 text-xl">
                        <a href="#" className="hover:text-gray-500 transition"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-gray-500 transition"><FaInstagram /></a>
                    </div>
                </div>

                {/* Right Copyright */}
                <p className="text-sm text-gray-700 font-medium">
                    © 2025 Blackribbit ®
                </p>
            </div>
        </footer>
    );
};

export default Footer;
