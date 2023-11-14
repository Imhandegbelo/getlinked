import star_pu from "../assets/star pu.png";
import star_gra from "../assets/star.png";
import big_idea from "../assets/the big idea 1.png";

export default function Introduction() {
  return (
    <section id="introduction" className="flex flex-col md:flex-row items-center py-10 border-t border-[#D434FE]/30 gap-16 px-9 sm:px-10 md:px-12 lg:px-24 xl:px-36 relative">
      <div className="w-full md:w-1/2">
        <img src={big_idea} alt="big idea image" className="" />
      </div>
      <div className="flex flex-col text-center md:text-left items-center text-white w-full md:w-1/2">
        <div className="flex justify-center items-center gap-10 mb-1 md:mb-4 lg:mb-10">
          <h3 className="text-[20px] md:text-[2rem]">
            Introduction to getlinked{" "}
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
          </h3>{" "}
          <img
            src={star_pu}
            alt="purple star"
            className="w-5 h-5 animate-[ping_1s_infinite] duration-300"
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
        src={star_gra}
        alt="twinkling star"
        className="w-5 h-6 animate-[pulse_1s_infinite] duration-300 absolute top-1/2 left-10"
      />
    </section>
  );
}
