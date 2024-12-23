import React from "react";

const Experience = () => {
  const data = [
    {
      id: 1,
      jobDescription: "Software Developer Engineer",
      company: "Plutos One Pvt. Ltd.",
      from: "April 2024",
      to: "Present",
    },
    {
      id: 2,
      jobDescription: "Software Developer Engineer",
      company: "Devtrust Pvt. Ltd.",
      from: "May 2023",
      to: "April 2024",
    },
    {
      id: 3,
      jobDescription: "Jr. Software Developer Engineer",
      company: "AAA 2 Innovate Pvt. Ltd.",
      from: "October 2022",
      to: "May 2023",
    },
    {
      id: 4,
      jobDescription: "Jr. Software Developer Engineer",
      company: "Lead Examine Pvt. Ltd.",
      from: "July 2021",
      to: "Sep 2022",
    },
  ];
  const course = [
    {
      id: 1,
      course: "MERN Stack",
      institute: "Croma Campus Noida",
    },
  ];

  return (
    <div className="min-h-screen  text-white flex  justify-center p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-6">Experiences</h1>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-gray-800 text-sm text-gray-200">
            <thead>
              <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <th className="px-6 py-3 text-left font-medium">#</th>
                <th className="px-6 py-3 text-left font-medium">
                  Job Description
                </th>
                <th className="px-6 py-3 text-left font-medium">Company</th>
                <th className="px-6 py-3 text-left font-medium">From</th>
                <th className="px-6 py-3 text-left font-medium">To</th>

                {/* <th className="px-6 py-3 text-left font-medium">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
                  } hover:bg-gray-600`}
                >
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{user.jobDescription}</td>
                  <td className="px-6 py-4">{user.company}</td>
                  <td className="px-6 py-4">{user.from}</td>
                  <td className="px-6 py-4">{user.to}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Experience;
