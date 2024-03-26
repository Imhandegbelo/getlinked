import React, { useState } from "react";

export default function Timer({d=0, h = 0, m = 0, s = 0 }) {
  const [day, setDay] = useState(d);
  const [hour, setHour] = useState(h);
  const [minute, setMinute] = useState(m);
  const [Second, setSecond] = useState(s);

  const countdown = (d,h,m,s)=>{
    setInterval(() => {
        setSecond
    }, 1000);
  }
  return (
    <div className="font-Unica+one flex justify-center md:justify-start gap-6 items-center mt-8 mb-10 md:mb-0 lg:mt-16 ">
      <h3 className="text-5xl lg:text-6xl">
        00 <span className="text-xs md:text-sm">H</span>
      </h3>
      <h3 className="text-5xl lg:text-6xl">
        00 <span className="text-xs md:text-sm">M</span>
      </h3>
      <h3 className="text-5xl lg:text-6xl">
        00 <span className="text-xs md:text-sm">S</span>
      </h3>
    </div>
  );
}
