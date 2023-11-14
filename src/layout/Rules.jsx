import photo_rules from "../assets/photo_rules.png";
import star_w from "../assets/star (1).png";
import star_g from "../assets/star.png";
import star_p from "../assets/star pu.png";

export default function Rules() {
  return (
    <section
      id="rules"
      className="flex flex-col md:flex-row justify-between items-center lg:gap-20 py-6 px-9 border-t border-[#D434FE]/30 sm:px-10 md:px-12 lg:px-24 xl:px-36 text-white relative"
    >
      <div className="w-full text-center md:text-left">
        <h2 className="text-3xl font-bold mb-3 lg:mb-6">
          Rules and <br /> <span className="text-[#D434FE]">Guidelines</span>
        </h2>
        <p className="text-sm">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="w-full order-first md:order-last">
        <img
          src={photo_rules}
          alt="Woman solved puzzle"
          className="object-center"
        />
      </div>
      {/* twinkling stars */}
      <img
        src={star_w}
        alt="twinkling star"
        className="w-5 h-6 animate-[ping_1s_infinte] absolute"
      />
    </section>
  );
}