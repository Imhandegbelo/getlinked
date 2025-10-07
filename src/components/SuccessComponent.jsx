import congrats from "../assets/images/congratulation.png";
import { useNavigate } from "react-router-dom";

const SuccessComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/80 min-h-screen w-screen">
      <div className="flex flex-col bg-black p-10 text-center text-white mx-auto border border-[#D434FE] rounded">
        <div>
          <img
            src={congrats}
            alt="Man celebrating success"
            className="mx-auto"
          />
        </div>
        <div className="font-semibold">
          <p className="text-2xl">
            Congratulations you have successfully Registered!
          </p>
          <p className="text-sm">
            Yes, it was easy and you did it! check your mail box for next step
          </p>
        </div>
        <div className="mt-10 p-px rounded bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9]">
          <div className="rounded bg-slate-800">
            <button
              onClick={()=>navigate("/")}
              className={`w-full py-3 px-4 transition transition-all font-bold bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9] hover:bg-none`}
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessComponent;
