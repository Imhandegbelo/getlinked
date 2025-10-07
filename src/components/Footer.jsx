import instagram from "../assets/svgs/instagram.svg";
import twitter from "../assets/svgs/twitter.svg";
import facebook from "../assets/svgs/fb.svg";
import linkedin from "../assets/svgs/linkedin.svg";
import phone from "../assets/svgs/phone.svg";
import location from "../assets/svgs/location.svg";
import star_pi from "../assets/images/star_pi.png";
import star_g from "../assets/images/star_g.png";
import star_w from "../assets/images/star_w.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="font-Montserrat bg-[#100B20] text-white p-9 sm:p-12 md:px-16 lg:px-24 xl:px-36">
      <div className="flex flex-col gap-6 md:flex-row md:gap-16 relative">
        <div className="w-full md:w-1/2 relative">
          <h3 className="font-clash+display text-2xl sm:text-3xl md:text-4xl font-bold">
            get<span className="text-[#D434FE]">linked</span>
          </h3>
          <p className="mt-3 mb-10">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="flex">
            <span>Terms of Use</span>{" "}
            <span className="font-bold text-[#D434FE] mx-2 ">|</span>{" "}
            <span>Privacy Policy</span>
          </div>
          <img
            src={star_w}
            alt="white twinkling star"
            className="absolute top-20 -left-[10%] w-4 md:w-5 animate-[pulse_2s_infinite]"
          />
        </div>
        <div className="flex flex-col w-full md:flex-row gap-6 md:justify-between">
          <div className="grid gap-2 lg:gap-3 text-xs relative">
            <h4 className="text-[#D434FE] text-sm">Useful Links</h4>
            <Link to="#" className="hover:text-[#D434FE]">
              Overview
            </Link>
            <Link to="#" className="hover:text-[#D434FE]">
              Timeline
            </Link>
            <Link to="#" className="hover:text-[#D434FE]">
              FAQs
            </Link>
            <Link to="/register" className="hover:text-[#D434FE]">
              Register
            </Link>
            <div className="flex gap-2 lg:gap-4 items-center">
              <h5 className="text-[#D434FE]">Follow us</h5>
              <ul className="flex justify-between items-center gap-2">
                <li aria-label="instgram page">
                  <a href="#">
                    <img src={instagram} alt="instagram logo" />
                  </a>
                </li>
                <li aria-label="twitter page">
                  <a href="#">
                    <img src={twitter} alt="twitter logo" />
                  </a>
                </li>
                <li aria-label="facebook page">
                  <a href="">
                    <img src={facebook} alt="facebook logo" />
                  </a>
                </li>
                <li aria-label="linkedin page">
                  <a href="#">
                    <img src={linkedin} alt="linkedin logo" />
                  </a>
                </li>
              </ul>
            </div>
            <img
              src={star_g}
              alt="gray twinkling star"
              className="absolute top-10 w-4 md:w-5 right-[30%] animate-ping"
            />
          </div>
          <div className="flex flex-col gap-4 relative">
            <h4 className="text-[#D434FE] text-sm">Contact Us</h4>
            <div className="flex gap-4 items-center">
              <img src={phone} alt="phone" className="w-4" />
              <p className="text-xs">+234 6707653444</p>
            </div>
            <div className="flex items-start gap-4">
              <img src={location} alt="phone" className="w-4" />
              <p className="text-xs">
                27,Alara Street <br />
                Yaba 100012 <br />
                Lagos State
              </p>
            </div>
            <img
              src={star_w}
              alt="white twinkling star"
              className="absolute top-10 md:bottom-0 right-0 w-3 md:w-5 animate-[pulse_1s_infinite]"
            />
          </div>
        </div>
        <img
          src={star_pi}
          alt="pink star twinkling"
          className="absolute -bottom-10 w-5 md: left-1/2 animate-pulse"
        />
      </div>
      <div className="text-center mt-16 text-xs">
        All rights reserved. © getlinked Ltd.
      </div>
    </footer>
  );
}
