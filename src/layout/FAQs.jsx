import thinking_man from "../assets/thinking-man.png";
import question_mark from "../assets/question-mark.svg";
import star_p from "../assets/star_p.png";
import star_g from "../assets/star_g.png";
import star_w from "../assets/star_w.png";
import star_pi from "../assets/star_pi.png";
import FaqComponent from "../components/FaqComponent";

export default function FAQs() {
  return (
    <section
      id="faq"
      className="flex flex-col md:flex-row gap-24 md:gap-6 items-center py-24 px-9 sm:px-12 md:px-16 lg:px-24 xl:px-36 border-b border-purple-700/30"
    >
      <div className="grid gap-3 xl:gap-5 w-full md:w-2/5 relative">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Frequently Asked <br />{" "}
          <span className="text-[#D434FE]">Questions</span>
        </h3>
        <p className="mb-6">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <FaqComponent />
        <img
          src={star_p}
          alt="purple twinkling star"
          className="absolute animate-[pulse_1s_infinite] -top-10 left md:-left-10"
        />
      </div>
      <div className="w-full md:w-3/5 relative">
        <img src={thinking_man} alt="bearded man thinking with hands on jaw" />

        {/* Asthetics */}
        <img
          src={star_w}
          alt="white twinkling star"
          className="absolute animate-[pulse_1s_infinite] right-[20%] -bottom-[10%] lg:bottom-0"
        />
        <img
          src={star_g}
          alt="white twinkling star"
          className="absolute animate-[pulse_2s_infinite] left-[10%] top-[40%]"
        />
        <img
          src={star_pi}
          alt="white twinkling star"
          className="absolute animate-[pulse_1s_infinite] left-[20%] top-[20%]"
        />
        <img
          src={star_pi}
          alt="white twinkling star"
          className="absolute animate-[pulse_2s_infinite] left-1/2 -top-10"
        />
        <img
          src={question_mark}
          alt="white twinkling star"
          className="absolute animate-[ping_1s_ease-in-out_infinite]c w-8 left-[15%] -top-10"
        />
        <img
          src={question_mark}
          alt="white twinkling star"
          className="absolute animate-[wiggle_1s_ease-in-out_infinite] left-[40%] -top-20"
        />
        <img
          src={question_mark}
          alt="white twinkling star"
          className="absolute animate-[wiggle_1s_ease-in-out_infinite] w-10 left-[65%] -top-10"
        />
      </div>
    </section>
  );
}
