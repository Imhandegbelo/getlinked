import React from "react";
import congrats from "../assets/congratulation.png";

const SuccessComponent = () => {
  return (
    <div className="flex flex-col bg-none p-10 text-center text-white mx-auto border border-[#D434FE] rounded">
      <div>
        <img src={congrats} alt="Man celebrating success" className="mx-auto" />
      </div>
      <div className="font-semibold">
        <p className="text-2xl">
          Congratulations you have successfully Registered!
        </p>
        <p className="text-sm">
          Yes, it was easy and you did it! check your mail box for next step
        </p>
      </div>
      <div className="p-px rounded bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9]">
        <div className="rounded bg-slate-800">
          <button
            onClick={console.log("clicked")}
            className={`w-full py-3 px-4 transition transition-all font-bold bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9] hover:bg-none`}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessComponent;
