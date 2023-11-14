import React from "react";
import { Link } from "react-router-dom";

export default function Button({ title }) {
  return (
    <Link
      to={"/register"}
      className="p-px rounded bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9]"
    >
      <div className="rounded bg-slate-800">
        <button
          className={`text-white py-3 px-7 text-white font-bold rounded bg-gradient-to-r from-[#903AFF] via-[#D434FE] via[#FF26B9] to-[#FE34B9] hover:bg-none focus:bg-none`}
        >
          {title}
        </button>
      </div>
    </Link>
  );
}

// export default Button;
