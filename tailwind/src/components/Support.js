import React from "react";
import supporting from "../assets/support.jpeg";

const Support = () => {
  return (
    <section name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-slate-900/90 absolute">
        <img
          src={supporting}
          className="object-cover w-full h-full mix-blend-overlay"
          alt="support"
        />
      </div>
      <div className="max-w-[1240px] max-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-center uppercase text-slate-300">
            support
          </h2>
          <h3 className="py-6 text-5xl font-bold text-center">
            We support you
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-4 pt-12 text-black gap-x-8 "></div>
      </div>
    </section>
  );
};

export default Support;
