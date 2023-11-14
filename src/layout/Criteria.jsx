import tech_talk from "../assets/";

export default function Criteria() {
  return (
    <section className="flex px-9 md:px-12 lg:px-24 xl:px-36">
      <div className="">
        <img src="" alt="" />
      </div>
      <div className="">
        <div className="text-[2rem]">
          <h3>Judging Criteria</h3>
          <h3 className="text-[#D434FE]">Key attributes</h3>
        </div>
        <div className="text-sm">
          <p className="">
            <span className="text-[#FF26B9]">Innovation and Creativity</span>:
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="">
            <span className="text-[#FF26B9]">Functionality</span>: Assess how
            well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>
          <p>
            <span className="text-[#FF26B9]">Impact and Relevance</span>:
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p>
            <span className="text-[#FF26B9]">Technical Complexity</span>:
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p>
            <span className="text-[#FF26B9]">Adherence to Hackathon Rules</span>
            : Judges will Ensure that the team adhered to the rules and
            guidelines of the hackathon, including deadlines, use of specific
            technologies or APIs, and any other competition-specific
            requirements.
          </p>
        </div>
        
      </div>
    </section>
  );
}