import React from "react";

const Education = () => {
  const data = [
    {
      id: 1,
      class: "10th",
      college: "Shri ANP IC School Pratapgarh",
      percentage: "83%",
    },
    {
      id: 2,
      class: "12th",
      college: "Shri ANP IC School Pratapgarh",
      percentage: "73%",
    },
    {
      id: 3,
      class: "B.tech",
      college: "B.B.S. College of Engineering and Technology, Prayagraj",
      percentage: "78%",
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
        <h1 className="text-3xl font-bold text-center mb-6">
          My Educational Qualifications
        </h1>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-gray-800 text-sm text-gray-200">
            <thead>
              <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <th className="px-6 py-3 text-left font-medium">#</th>
                <th className="px-6 py-3 text-left font-medium">Class</th>
                <th className="px-6 py-3 text-left font-medium">College</th>
                <th className="px-6 py-3 text-left font-medium">Percentage</th>
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
                  <td className="px-6 py-4">{user.class}</td>
                  <td className="px-6 py-4">{user.college}</td>
                  <td className="px-6 py-4">{user.percentage}</td>
                  {/* <td className="px-6 py-4">
                    <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
                      Delete
                    </button> */}
                  {/* </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" mt-10">
          <h1 className="text-3xl font-bold text-center mb-6">
            Certification{" "}
          </h1>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="min-w-full bg-gray-800 text-sm text-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <th className="px-6 py-3 text-left font-medium">#</th>
                  <th className="px-6 py-3 text-left font-medium">Course</th>
                  <th className="px-6 py-3 text-left font-medium">Istitue</th>
                </tr>
              </thead>
              <tbody>
                {course.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
                    } hover:bg-gray-600`}
                  >
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4">{user.course}</td>
                    <td className="px-6 py-4">{user.institute}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
