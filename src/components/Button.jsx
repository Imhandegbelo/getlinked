import { Link } from "react-router-dom";

export default function Button({ title, link, className }) {
  return (
    <>
      {link === true ? (
        <Link
          to={"/register"}
          className={`${className} flex justify-center items-center w-fit p-px rounded bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9]`}
        >
          <div className="rounded bg-[#150E28]">
            <button
              className={`text-white py-2 px-7 text-white font-bold rounded bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9] hover:bg-none focus:bg-none`}
            >
              {title}
            </button>
          </div>
        </Link>
      ) : (
        <div
          className="flex justify-center items-center w-fit p-px rounded bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9]"
        >
          <div className="rounded bg-[#150E28]">
            <button
              className={`text-white py-2 px-7 text-white font-bold rounded bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9] hover:bg-none focus:bg-none`}
            >
              {title}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// export default Button;
