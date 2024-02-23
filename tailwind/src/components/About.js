import React from "react";

const About = () => {
  return (
    <section name="about" className="w-full h-screen">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">About this company</h2>
          <p className="py-6 text-3xl text-gray-500 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <p className="mt-20 text-xl">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
    </section>
  );
};

export default About;
