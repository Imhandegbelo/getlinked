import list_item from "../assets/svgs/list-item.svg";
import vector_lock from "../assets/images/Vectorlock.png";
import star_g from "../assets/images/star_g.png";
import star_p from "../assets/images/star_p.png";
import star_pi from "../assets/images/star_pi.png";
import star_w from "../assets/images/star_w.png";

export default function Privacy() {
  return (
    <section
      id="privacy"
      className="text-white py-10 md:py-24 text-white px-9 sm:px-12 md:px-16 lg:px-24 xl:px-36 border-b border-purple-700/30"
    >
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full">
          <div className="text-center md:text-left relative">
            <h3 className="font-clash+display mb-6 text-xl md:text-2xl lg:text-[2rem] lg:leading-[2.1rem] mb-4 font-bold">
              Privacy Policy and <br />
              <span className="text-[#D434FE]">Terms</span>
            </h3>
            <small className="text-sm text-white/70">
              Last updated on September 12, 2023
            </small>
            <p className="text-xs md:text-sm mt-8 leading-[188.4%]">
              Below are our privacy & policy, which outline a lot of goodies.
              it's our aim to always take of our participant
            </p>
            <img
              src={star_g}
              alt="gray twinkling star"
              className="absolute -top-5 right-[20%] md:right-[40%] w-2 md:w-auto animate-[ping_1s_infinite]"
            />
          </div>
          <div className="py-3 px-4 md:py-10 md:px-16 mt-16 border rounded-[5px] border-[#D434FE] relative">
            <p className="text-center md:text-left text-xs md:text-sm leading-[216.4%]">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="">
              <h4 className="font-bold text-[13px] md:text-base text-[#D434FE] font-base mt-6">
                Licensing Policy
              </h4>
              <h5 className="text-xs md:text-sm font-bold leading-[216.4%]">
                Here are terms of our Standard License:
              </h5>
            </div>
            <div className="">
              <div className="flex items-start gap-4 mt-6">
                <img src={list_item} alt="list" />
                <p className="text-xs md:text-sm m-0 leading-[216.4%]">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex items-start gap-4 mt-6 m-0">
                <img src={list_item} alt="list" />
                <p className="text-xs md:text-sm leading-[216.4%]">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
              <button className="font-base">Read More</button>
            </div>
            <img
              src={star_pi}
              alt="twinkling pink star"
              className="absolute bottom-[30%] w-4 md:w-auto -left-[7%] md:-left-[10%] animate-[pulse_2s_infinite]"
            />
          </div>
        </div>
        <div className="w-full relative">
          <img
            src={vector_lock}
            alt="vector man standing on padlock with key"
            className="md:-mt-[20%] self-center"
          />
          <img
            src={star_g}
            alt="gray twinkling star"
            className="absolute bottom-[20%] w-3 md:w-5 right-0 animate-[pulse_1s_infinite]"
          />
          <img
            src={star_w}
            alt="white twinkling star"
            className="absolute bottom-[15%] md:bottom-[24%] left-[20%] w-3 md:w-4 animate-[pulse_2s_infinite]"
          />
          <img
            src={star_w}
            alt="white twinkling star"
            className="absolute top-[20%] md:top-[10%] right-[20%] w-3 animate-[pulse_1s_infinite]"
          />
          <img
            src={star_p}
            alt="purple twinkling star"
            className="absolute top-[10%] -left-[8%] w-4 animate-[ping_1s_infinite]"
          />
          <img
            src={star_pi}
            alt="pink twinkling star"
            className="absolute bottom-[38%] left-[36%] w-3 animate-[ping_2s_infinite]"
          />
        </div>
      </div>
    </section>
  );
}
