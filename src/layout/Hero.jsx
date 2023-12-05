import star_w from "../assets/images/star_w.png";
import star_g from "../assets/images/star_g.png";
import chain from "../assets/images/chain.png";
import fire from "../assets/images/fire.png";
import pink_line from "../assets/svgs/pink-line.svg";
import man_glasses from "../assets/images/man_glasses.png";
import starry_globe from "../assets/images/starry-globe.png";
import Button from "../components/Button";
import Timer from "../components/Timer";

export default function Hero() {
  return (
    <section className="md:ml-16 lg:ml-24 xl:ml-36 mt-9 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-24 text-white border-b border-purple-700/30">
      <div className="flex justify-center md:justify-end mb-16 relative">
        <h1 className="text-base md:text-3xl lg:text-4xl mx-auto lg:mr-16 font-bold italic">
          Igniting a Revolution in HR Innovation
        </h1>
        <img
          src={pink_line}
          alt="pink line"
          className="absolute w-28 md:w-52 lg:w-60 right-9 sm:right-[10%] md:right-16 top-5 md:top-10"
        />
        <img
          src={star_w}
          alt="white twinkling star"
          className="absolute animate-[pulse_1s_infinite] w-4 md:w-5 top-10 left-20"
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col text-center justify-center md:justify-normal md:text-left gap-6 relative">
          <div className="font-clash+display font-bold text-3xl md:text-4xl lg:text-6xl xl:text-[5rem] xl:leading-[6rem] relative">
            <h2>getlinked Tech</h2>
            <h2>
              Hackathon <span className="text-[#D434FE]">1.0</span>
            </h2>
            <img
              src={chain}
              alt="chain"
              className="absolute h-8 md:h-12 lg:h-14 xl:h-16 right-[12%] bottom-[2%] lg:-right-[2%]"
            />
            <img
              src={fire}
              alt="chain"
              className="absolute lg:w-12 xl:w-16 right-[5%] bottom-[2%] lg:-right-[12%]"
            />
          </div>
          <p className="text-xs mx-12 md:mx-0 sm:text-sm md:text-base lg:text-xl">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <div className="flex justify-center md:justify-normal">
            <Button title="Register" className="" />
          </div>
          <Timer />
          <img
            src={star_g}
            alt="gray twinkling star"
            className="absolute w-4 md:w-5 right-20 bottom-20 animate-[ping_1s_infinite]"
          />
        </div>
        <div className="relative">
          <img src={man_glasses} alt="man wearing vr glasses" className="" />
          <img
            src={starry_globe}
            alt="globe with bright stars"
            className="absolute right-0 -top-4 animate-[spin_130s_linear_infinite]"
          />
          <img
            src={star_g}
            alt="gray twinkling star"
            className="absolute left-20 top-10 animate-[pulse_2s_infinite]"
          />
        </div>
      </div>
    </section>
  );
}
