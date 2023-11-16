import partner from "../assets/svgs/partner-and-sponsor.svg";
import star_p from "../assets/images/star_p.png";
import star_pi from "../assets/images/star_pi.png";
import star_w from "../assets/images/star_w.png";

export default function Partners() {
  return (
    <section
      id="sponsors"
      className="flex flex-col text-center text-white p-9 sm:p-12 md:p-16 lg:p-24 xl:p-36"
    >
      <h3 className="font-clash+display text-xl md:text-2xl lg:text-[2rem] lg:leading-[2.1rem] font-bold">
        Partners and Sponsors
      </h3>
      <p className="w-full lg:w-1/3 text-sm mx-auto mt-5 mb-14">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div className="border border-[#D434FE] rounded-lg p-9 sm:p-12 md:p-16 lg:p-20 xl:p-24 relative">
        <img src={partner} alt="partners and sponsor logos" />
        <img
          src={star_p}
          alt="purple twinkling star"
          className="absolute left-[5%] w-4 md:w-5 -top-10 animate-pulse"
        />
        <img
          src={star_pi}
          alt="purple twinkling star"
          className="absolute w-4 md:w-5 right-[40%] top-5 md:top-[18%] animate-[pulse_2s_infinite]"
        />
        <img
          src={star_w}
          alt="purple twinkling star"
          className="absolute w-5 md:w-6 right-[40%] bottom md:bottom-[18%] animate-[pulse_1s_infinite]"
        />
      </div>
    </section>
  );
}
