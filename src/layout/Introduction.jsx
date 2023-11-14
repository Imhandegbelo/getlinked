import star_p from "../assets/star_p.png";
import star_g from "../assets/star_g.png";
import big_idea from "../assets/the big idea 1.png";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="flex flex-col md:flex-row items-center py-10 border-b border-purple-700/30 gap-16 px-9 sm:px-10 md:px-12 lg:px-24 xl:px-36 relative"
    >
      <div className="w-full md:w-1/2">
        <img src={big_idea} alt="big idea image" className="" />
      </div>
      <div className="flex flex-col text-center md:text-left items-center text-white w-full md:w-1/2">
        <div className="relative mb-1 md:mb-4 lg:mb-10">
          <h3 className="text-xl md:text-2xl lg:text-3xl md:text-[2rem] font-bold">
            Introduction to getlinked <br />
            <span className="text-[#D434FE]">techHackathon 1.0</span>
          </h3>
          <img
            src={star_p}
            alt="purple star"
            className="w-5 h-5 absolute right-2 animate-[ping_1s_infinite] duration-300"
          />
        </div>
        <p className="text-[13px] md:text-sm leading-[27.5px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <img
        src={star_g}
        alt="twinkling star"
        className="w-5 h-6 animate-[pulse_1s_infinite] duration-300 absolute top-1/2 left-10"
      />
    </section>
  );
}
