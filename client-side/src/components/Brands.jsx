import React from "react";
import tcl from "../assets/images/tcl.png";
import samsung from "../assets/images/samsung.png";
import lg from "../assets/images/lg.png";
import godrej from "../assets/images/godrej.png";

const Brands = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto py-11">
      <p className="text-center text-5xl font-bold uppercase tracking-tighter">
        Brands we offer
      </p>
      <div className="flex justify-center items-center gap-9 py-11 flex-wrap">
        <img src={tcl} alt="" width={160} height={60} />
        <img src={samsung} alt="" width={160} height={60} />
        <img src={lg} alt="" width={160} height={60} />
        <img src={godrej} alt="" width={160} height={60} />
      </div>
    </div>
  );
};

export default Brands;
