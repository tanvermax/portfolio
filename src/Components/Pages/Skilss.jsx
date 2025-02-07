import React from "react";

const Skilss = () => {
  return (
    <div className="min-h-screen w-screen bg-black py-20">
      <div className="min-h-screen  bg-black text-white py-12 px-6">
        <h2 className="text-xs md:text-xl font-bold text-center text-green-400">
          MY Skills
        </h2>
        

        {/* Skills Section */}
        <div className="md:max-w-6xl mx-auto mt-10  ">
          <h3 className="md:text-2xl text-[6px] font-semibold text-green-400">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 mt-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "Bootstrap",
              "Git/GitHub",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg text-center shadow-md"
              >
                <p className="md:text-2xl text-[6px] font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CV Section */}
        <div className="max-w-6xl mx-auto mt-10">
          <h3 className="md:text-2xl text-[6px] font-semibold text-green-400">Download CV</h3>
          <div className="mt-4">
            <a
              href="/your-cv.pdf"
              download
              className="bg-green-500 text-black font-bold md:px-6 md:py-3 rounded-md inline-block hover:bg-green-400 transition"
            >      
              Download CV
            </a>
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-6xl mx-auto mt-10">
          <h3 className="md:text-2xl text-[6px] font-semibold text-green-400">Education</h3>
          <div className="mt-4 space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h4 className="md:text-xl text-[6px] font-bold">
                BSc in Computer Science & Engineering
              </h4>
              <p className="text-gray-400 md:text-2xl text-[6px]">
                Ideal College, Dhanmondi | 4th Year
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h4 className="md:text-xl text-[6px] font-bold">
                Higher Secondary Certificate (HSC)
              </h4>
              <p className="text-gray-400 md:text-2xl text-[6px]">Ideal College, Dhanmondi</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h4 className="md:text-xl text-[6px] font-bold">
                Secondary School Certificate (SSC)
              </h4>
              <p className="text-gray-400 md:text-2xl text-[6px]">AL Amin Institute , cumilla</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skilss;
