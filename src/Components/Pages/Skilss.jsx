import React from "react";

const Skilss = () => {
  return (
    <div className="min-h-screen w-screen bg-black py-20">
      <div className="min-h-screen  bg-black text-white py-12 px-6">
        <h2 className="text-xs md:text-xl font-bold text-center text-green-400">
          MY Skills
        </h2>
        <p className="text-4xl font-bold text-center py-10 w-[700px] mx-auto">
          Crafting Stories through Develope and Imagination
        </p>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto mt-10">
          <h3 className="text-2xl font-semibold text-green-400">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
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
                <p className="text-lg font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CV Section */}
        <div className="max-w-6xl mx-auto mt-10">
          <h3 className="text-2xl font-semibold text-green-400">Download CV</h3>
          <div className="mt-4">
            <a
              href="/your-cv.pdf"
              download
              className="bg-green-500 text-black font-bold px-6 py-3 rounded-md inline-block hover:bg-green-400 transition"
            >      
              Download CV
            </a>
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-6xl mx-auto mt-10">
          <h3 className="text-2xl font-semibold text-green-400">Education</h3>
          <div className="mt-4 space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold">
                BSc in Computer Science & Engineering
              </h4>
              <p className="text-gray-400">
                Ideal College, Dhanmondi | 4th Year
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold">
                Higher Secondary Certificate (HSC)
              </h4>
              <p className="text-gray-400">Ideal College, Dhanmondi</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold">
                Secondary School Certificate (SSC)
              </h4>
              <p className="text-gray-400">Your School Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skilss;
