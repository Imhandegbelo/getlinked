import tech_talk from "../assets/tech-talk.png";
import star_w from "../assets/star_w.png";
import star_g from "../assets/star_g.png";
import star_p from "../assets/star_p.png";
import ellipse from "../assets/ellipse.png";
import Button from "../components/Button";

export default function Criteria() {
  return (
    <section
      id="criteria"
      className="flex flex-col md:flex-row items-center gap-10 py-12 px-9 md:px-12 lg:px-24 xl:px-36 border-b border-purple-700/30 relative"
    >
      <div className="w-full md:w-1/2 relative z-50">
        <img
          src={tech_talk}
          alt="a woman and man having a technical conversation"
          className="z-5n0"
        />
        {/* Twinkling stars */}
        <img
          src={star_w}
          alt="white twinkling star"
          className="w-5 h-5 hidden md:block absolute bottom-0 right-0 animate-[ping_1s_infinite]"
        />
        <img
          src={star_g}
          alt="gray twinkling star"
          className="w-5 h-5 absolute top-1/2 left-1/2 animate-[pulse_1s_infinite]"
        />
        {/* Ellipse behind */}
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="text-xl md:text-2xl lg:text-[2rem] lg:leading-[2.1rem] mb-4 font-bold">
          <h3>
            Judging Criteria <br />
            <span className="text-[#D434FE]">Key attributes</span>
          </h3>
        </div>
        <div className="text-sm grid gap-3 md:gap-2 xl:gap-4">
          <p>
            <span className="text-[#FF26B9] font-bold">
              Innovation and Creativity
            </span>
            : Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p>
            <span className="text-[#FF26B9] font-bold">Functionality</span>:
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p>
            <span className="text-[#FF26B9] font-bold">
              Impact and Relevance
            </span>
            : Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p>
            <span className="text-[#FF26B9] font-bold">
              Technical Complexity
            </span>
            : Evaluate the technical sophistication of the solution. Judges
            would consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p>
            <span className="text-[#FF26B9] font-bold">
              Adherence to Hackathon Rules
            </span>
            : Judges will Ensure that the team adhered to the rules and
            guidelines of the hackathon, including deadlines, use of specific
            technologies or APIs, and any other competition-specific
            requirements.
          </p>
          <div className="w-fit mx-auto md:mx-0">

          <Button title="See More" />
          </div>
        </div>
      </div>

      {/* Twinkling stars */}
      <img
        src={star_p}
        alt="purple twinkling star"
        className="w-5 h-5 absolute lg:top-10 xl:top-0 animate-[ping_1s_infinite]"
      />
       <img
          src={star_w}
          alt="white twinkling star"
          className="w-5 h-5 absolute md:hidden bottom-10 right-10 animate-[ping_1s_infinite]"
        />
      <img
        src={ellipse}
        alt="gradient ellipse"
        className="hidden lg:absolute lg:top-[8rem] xl:top-7 lg:left-[7rem] xl:left-[13rem] z-10"
      />
    </section>
  );
}
