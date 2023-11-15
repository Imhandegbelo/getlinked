import thinking_man from "../assets/thinking-man.png";
import question_mark from "../assets/question-mark.svg";
import star_p from "../assets/star_p.png";
import star_w from "../assets/star_w.png";
import star_pi from "../assets/star_pi.png";
import FaqComponent from "../components/FaqComponent";

export default function FAQs() {
  return (
    <section
      id="faq"
      className="flex flex-col md:flex-row gap-6 items-center py-14 px-9 sm:px-12 md:px-16 lg:px-24 xl:px-36"
    >
      <div className="grid gap-5 w-2/5 relative">
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
          className="absolute animate-[pulse_1s_infinite] -top-10 -left-10"
        />
      </div>
      <div className="w-3/5 relative">
        <img src={thinking_man} alt="bearded man thinking with hands on jaw" />
        <img
          src={star_w}
          alt="white twinkling star"
          className="absolute animate-[pulse_1s_infinite] right-20 bottom-14"
        />
      </div>
    </section>
  );
}
