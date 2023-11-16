import star_w from "../assets/images/star_w.png";
import star_g from "../assets/images/star_g.png";
import pink_line from "../assets/svgs/pink-line.svg";
import man_glasses from "../assets/images/man_glasses.png";
import starry_globe from "../assets/images/starry-globe.png";
import Button from "../components/Button";
import Timer from "../components/Timer";

export default function Hero() {
  return (
    <section className="ml-9 sm:ml-12 md:ml-16 lg:ml-24 xl:ml-36 mt-24 text-white ">
      <div className="flex justify-center md:justify-end mb-16 relative">
        <h1 className="text-4xl mr-16 font-bold italic">Igniting a Revolution in HR Innovation</h1>
        <img src={pink_line} alt="pink line" className="absolute right-16 top-10" />
        <img src={star_w} alt="white twinkling star" className="absolute animate-[pulse_1s_infinite] top-10 left-20" />
      </div>
      <div className="flex">
        <div className="flex flex-col gap-6 relative">
          <h2 className="font-bold text-[2rem] leading-[6rem] lg:text-[5rem]">
            getlinked Tech <br />
            <span>
              Hackathon <span className="text-[#D434FE]">1.0</span>
            </span>
          </h2>
          <p className="text-[0.8rem] sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button title="Register" />
          <Timer />
          <img src={star_g} alt="gray twinkling star" className="absolute right-20 bottom-20 animate-[ping_1s_infinite]" />
        </div>
        <div className="relative">
          <img src={man_glasses} alt="man wearing vr glasses" className="" />
          <img
            src={starry_globe}
            alt="globe with bright stars"
            className="absolute right-0 -top-4 animate-[spin_130s_linear_infinite]"
          />
           <img src={star_g} alt="gray twinkling star" className="absolute left-20 top-10 animate-[pulse_2s_infinite]" />
        </div>
      </div>
    </section>
  );
}
