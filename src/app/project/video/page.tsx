import React from "react";

const Video = () => {
  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-bold text-highlight">
          {" "}
          Meeting Room Booking Management System
        </h2>
      </div>
      <div className="m-10 rounded-lg">
        <video src="/video/mymovie.mp4" controls autoPlay loop></video>
      </div>
    </div>
  );
};

export default Video;
