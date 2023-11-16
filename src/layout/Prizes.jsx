import success_target from "../assets/images/success-target.png";
import Rewards from "../components/Rewards";
import star_w from "../assets/images/star_w.png";
import star_p from "../assets/images/star_p.png";
import star_g from "../assets/images/star_g.png";

export default function Prizes() {
  return (
    <section
      id="prizes"
      className="py-24 text-white px-9 sm:px-12 md:px-16 lg:px-24 xl:px-36 border-b border-purple-700/30"
    >
      <div className="flex flex justify-between align-right mb-24">
        <div className="md:w-1/2 relative">
          <img
            src={star_p}
            alt="purple twinkling star"
            className="absolute left-20 top-10 animate-pulse"
          />
        </div>
        <div className="text-center md:text-left md:w-fit relative">
          <h3 className="font-clash+display text-xl md:text-2xl lg:text-3xl font-bold">
            Prizes and <br />
            <span className="text-[#D434FE]">Rewards</span>
          </h3>
          <p className="w-full md:w-4/5 mt-4">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
          <img
            src={star_p}
            alt="purple twinkling star"
            className="absolute top-1/2 right-[20%] animate-[pulse_1s_infinite]"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/5 relative">
          <img
            src={success_target}
            alt="target hit successfully"
          />
          <img
            src={star_w}
            alt="white twinkling star"
            className="w-4 absolute left-1/2 animate-ping"
          />
        </div>
        <div className="w-full md:w-1/2 relative">
          <Rewards />
          <img
            src={star_w}
            alt="white twinkling star"
            className="absolute left-[8%] w-4 md:w-5 -top-20 animate-[pulse_2s_infinite]"
          />
          <img
            src={star_g}
            alt="gray twinkling star"
            className="absolute right-[30%] -bottom-10 animate-[pulse_1s_infinite]"
          />
          <img
            src={star_w}
            alt="white twinkling star"
            className="absolute w-3 md:w-5 md:right-0 lg:-right-10 xl:-right-16 top-0 animate-[pulse_3s_infinite]"
          />
        </div>
      </div>
    </section>
  );
}
