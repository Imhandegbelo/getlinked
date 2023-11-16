import { useState } from "react";
import faq_data from "../data/faq-data.json";

export default function FaqComponent() {
  const [isOpen, setIsOpen] = useState(-1);

  return (
    <>
      {faq_data.map((single_data, index) => (
        <div key={`faq-${index+1}`} className="w-full border-b border-[#D434FE] text-sm my-2c">
          <div className="flex items-center justify-between">
            <p>{single_data.question}</p>
            <button
              onClick={() =>
                index === isOpen ? setIsOpen(-1) : setIsOpen(index)
              }
              className="flex items-center text-base p-1 text-[#D434FE] font-bold"
            >
              {isOpen === index ? "-" : "+"}
            </button>
          </div>
          <div
            className={`${
              isOpen === index ? "block bg-indigo-950/30 py-2 mb-2" : "hidden"
            }`}
          >
            {single_data.answer}
          </div>
        </div>
      ))}
    </>
  );
}
